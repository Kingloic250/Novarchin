import { useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { LinkedInIcon, WhatsAppIcon } from '../components/ui/Icon'
import { contact, services, whatsappUrl } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const field =
  'w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-[17px] text-ink placeholder:text-ink-3 transition-[border-color,box-shadow] duration-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20'

export default function ContactPage() {
  usePageTitle('Contact')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [serverError, setServerError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    const next: Errors = {}
    if (!data.name?.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? '')) next.email = 'Please enter a valid email address.'
    if ((data.message ?? '').trim().length < 10) next.message = 'Tell us a little more (at least 10 characters).'
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('sending')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.status === 400) {
        // The visitor can fix this themselves, so show the reason instead of falling back.
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error || 'Please check the form and try again.')
        setStatus('error')
        return
      }
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      form.reset()
    } catch {
      if (contact.email) {
        const body = `${data.message}\n\n— ${data.name} (${data.email})${data.company ? `, ${data.company}` : ''}`
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
          `Project enquiry${data.service ? `: ${data.service}` : ''}`,
        )}&body=${encodeURIComponent(body)}`
        setStatus('idle')
      } else {
        setServerError('We could not send your message right now. Please try again shortly.')
        setStatus('error')
      }
    }
  }

  const details = [
    contact.email && { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.address && { icon: MapPin, label: 'Office', value: contact.address },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your *project.*"
        intro="Share a few details and our team will get back to you within one business day."
      />

      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card p-6 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                      className="grid size-16 place-items-center rounded-full bg-brand text-white shadow-[0_0_40px_var(--glow)]"
                    >
                      <Check className="size-8" />
                    </motion.span>
                    <h2 className="mt-6 text-[28px] font-semibold tracking-[-0.02em]">Message sent.</h2>
                    <p className="mt-2 max-w-sm text-ink-2">Thank you for reaching out. We'll be in touch very soon.</p>
                    <button onClick={() => setStatus('idle')} className="mt-8 min-h-11 font-medium text-accent">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={onSubmit} noValidate className="grid gap-5" exit={{ opacity: 0 }}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" error={errors.name}>
                        <input name="name" autoComplete="name" className={field} placeholder="Jane Doe" />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input name="email" type="email" autoComplete="email" className={field} placeholder="jane@company.com" />
                      </Field>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Company (optional)">
                        <input name="company" autoComplete="organization" className={field} placeholder="Company name" />
                      </Field>
                      <Field label="Service">
                        <select name="service" className={field} defaultValue="">
                          <option value="">Not sure yet</option>
                          {services.map((s) => (
                            <option key={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <Field label="How can we help?" error={errors.message}>
                      <textarea name="message" rows={6} className={`${field} resize-y`} placeholder="Tell us about your goals, timeline and budget." />
                    </Field>
                    {/* Honeypot: hidden from people, tempting for bots. */}
                    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                    {serverError && <p role="alert" className="text-[15px] text-[#ff453a]">{serverError}</p>}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-brand px-8 text-[16px] font-medium text-white shadow-[0_10px_30px_-10px_var(--glow)] transition-all duration-300 hover:bg-brand-hover active:scale-[0.98] disabled:opacity-70 sm:justify-self-start"
                    >
                      {status === 'sending' && <Loader2 className="size-5 animate-spin" />}
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-4">
              {details.map((d) => (
                <div key={d.label} className="card flex items-start gap-4 p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand/15 text-accent">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-ink-3">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-0.5 block text-[17px] font-medium hover:text-accent">{d.value}</a>
                    ) : (
                      <p className="mt-0.5 text-[17px] font-medium">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex items-center gap-4 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[13px] font-semibold text-ink-3">WhatsApp</span>
                    <span className="mt-0.5 block text-[17px] font-medium">Chat with us on WhatsApp</span>
                  </span>
                  <span aria-hidden className="text-ink-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              )}
              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="card flex items-center gap-4 p-6 transition-transform hover:-translate-y-0.5">
                  <span className="grid size-11 place-items-center rounded-full bg-brand/15 text-accent">
                    <LinkedInIcon className="size-5" />
                  </span>
                  <span className="text-[17px] font-medium">Follow us on LinkedIn</span>
                </a>
              )}
              <div className="card p-6 md:p-8">
                <h2 className="text-[21px] font-semibold tracking-[-0.02em]">What happens next?</h2>
                <ol className="mt-5 space-y-4 text-ink-2">
                  {['We review your message within one business day.', 'A short discovery call to understand your goals.', 'You receive a clear proposal, timeline and team.'].map(
                    (t, i) => (
                      <li key={t} className="flex gap-3">
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface text-[13px] font-semibold text-ink tabular-nums">
                          {i + 1}
                        </span>
                        <span className="text-[15px]">{t}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-[14px] font-medium text-ink-2">{label}</span>
      {children}
      {error && <span className="text-[13px] text-[#ff453a]">{error}</span>}
    </label>
  )
}
