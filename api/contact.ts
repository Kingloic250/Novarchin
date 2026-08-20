import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name (min 2 characters)'),
  email: z.string().email('Enter a valid email address'),
  projectType: z.string().min(1, 'Select a project type'),
  message: z.string().min(10, 'Tell us a bit more (min 10 characters)'),
  website: z.string().optional(),
});

const ALLOWED_ORIGIN = 'https://novarchin.com';

const LIMIT = 5;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin;

  if (typeof origin === 'string' && origin.startsWith('http')) {
    const allowed = origin === ALLOWED_ORIGIN || origin.startsWith('http://localhost');
    res.setHeader('Access-Control-Allow-Origin', allowed ? origin : ALLOWED_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0]?.trim() ?? 'unknown';
  if (rateLimited(ip)) {
    res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
    return;
  }

  let parsed;
  try {
    parsed = schema.parse(req.body);
  } catch {
    res.status(400).json({ error: 'Invalid form data. Please check your entries.' });
    return;
  }

  if (parsed.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT ?? 'novarchin@gmail.com';
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    console.warn('Missing RESEND_API_KEY or CONTACT_FROM — message not sent.');
    res.status(500).json({ error: 'Contact service is not configured.' });
    return;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: parsed.email,
      subject: `New project inquiry: ${parsed.projectType} — ${parsed.name}`,
      text: [
        `Name: ${parsed.name}`,
        `Email: ${parsed.email}`,
        `Project type: ${parsed.projectType}`,
        '',
        'Message:',
        parsed.message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      res.status(500).json({ error: 'Failed to send your message. Please try again.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Failed to send your message. Please try again.' });
  }
}