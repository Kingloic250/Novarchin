import type { VercelRequest, VercelResponse } from '@vercel/node'

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name = '', email = '', company = '', service = '', message = '', website = '' } = (req.body ?? {}) as Record<
    string,
    string
  >

  // Honeypot filled in: pretend success so bots move on.
  if (website) return res.status(200).json({ ok: true })

  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 10 || message.length > 5000) {
    return res.status(400).json({ error: 'Invalid submission' })
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO) return res.status(500).json({ error: 'Email is not configured' })

  const html = `
    <h2>New enquiry from novarchin website</h2>
    <p><b>Name:</b> ${escape(name)}</p>
    <p><b>Email:</b> ${escape(email)}</p>
    ${company ? `<p><b>Company:</b> ${escape(company)}</p>` : ''}
    ${service ? `<p><b>Service:</b> ${escape(service)}</p>` : ''}
    <p><b>Message:</b></p>
    <p style="white-space:pre-wrap">${escape(message)}</p>`

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM || 'Novarchin Website <onboarding@resend.dev>',
      to: CONTACT_TO.split(',').map((s) => s.trim()),
      reply_to: email,
      subject: `New enquiry: ${name}${service ? ` · ${service}` : ''}`,
      html,
    }),
  })

  if (!r.ok) return res.status(502).json({ error: 'Failed to send' })
  return res.status(200).json({ ok: true })
}
