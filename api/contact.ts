/**
 * POST /api/contact — Vercel serverless function (Web Request/Response API).
 * Validates the contact form and emails it via Resend's HTTP API. No SDK,
 * no dependencies, so cold starts stay fast.
 *
 * Env vars (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY  required
 *   CONTACT_TO      required, comma-separated inbox(es)
 *   CONTACT_FROM    optional, verified sender, e.g. "Novarchin <hello@yourdomain.com>"
 */

const LIMITS = { name: 100, email: 200, company: 120, service: 80, message: 5000 } as const

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/** Strip line breaks so user input can't inject email headers. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim()

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(request: Request): Promise<Response> {
  // Only accept submissions from our own site.
  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  if (origin && host && new URL(origin).host !== host) return json(403, { error: 'Forbidden' })

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json(400, { error: 'Invalid JSON' })
  }

  // Honeypot filled in: pretend success so bots move on.
  if (typeof body.website === 'string' && body.website.length > 0) return json(200, { ok: true })

  const name = oneLine(str(body.name, LIMITS.name))
  const email = oneLine(str(body.email, LIMITS.email))
  const company = oneLine(str(body.company, LIMITS.company))
  const service = oneLine(str(body.service, LIMITS.service))
  const message = str(body.message, LIMITS.message)

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return json(400, { error: 'Please check your name, email and message.' })
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error('[contact] RESEND_API_KEY or CONTACT_TO is not set')
    return json(503, { error: 'Email is not configured' })
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ...(company ? [['Company', company] as [string, string]] : []),
    ...(service ? [['Service', service] as [string, string]] : []),
  ]

  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#1a1114">
  <h2 style="margin:0 0 16px;color:#5c0e1b">New enquiry from the Novarchin website</h2>
  ${rows.map(([k, v]) => `<p style="margin:4px 0"><b>${k}:</b> ${escapeHtml(v)}</p>`).join('')}
  <p style="margin:16px 0 4px"><b>Message:</b></p>
  <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
</div>`
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${message}`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM || 'Novarchin Website <onboarding@resend.dev>',
        to: CONTACT_TO.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `New enquiry: ${name}${service ? ` · ${service}` : ''}`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!r.ok) {
      console.error('[contact] Resend error', r.status, await r.text().catch(() => ''))
      return json(502, { error: 'Failed to send' })
    }
  } catch (err) {
    console.error('[contact] Request to Resend failed', err)
    return json(502, { error: 'Failed to send' })
  }

  return json(200, { ok: true })
}

export function GET(): Response {
  return json(405, { error: 'Method not allowed' })
}
