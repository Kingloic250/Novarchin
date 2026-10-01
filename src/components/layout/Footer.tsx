import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company, contact, services, whatsappUrl } from '../../content/site'
import { LinkedInIcon } from '../ui/Icon'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface text-[14px] text-ink-2">
      <div aria-hidden className="glow-soft bottom-[-300px] left-1/2 size-[900px] -translate-x-1/2" />
      <div className="container-x relative grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="text-[18px] text-ink">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed">{company.tagline}</p>
          <p className="mt-2 text-ink-3">Headquartered in Kigali, Rwanda.</p>
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-grid size-11 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent/40 hover:text-ink"
              aria-label="Novarchin on LinkedIn"
            >
              <LinkedInIcon className="size-4" />
            </a>
          )}
        </div>
        <FooterCol
          className="md:col-span-2"
          title="Company"
          links={[
            ['About', '/about'],
            ['Our work', '/work'],
            ['Contact', '/contact'],
          ]}
        />
        <FooterCol className="md:col-span-3" title="Services" links={services.slice(0, 5).map((s) => [s.title, '/services'])} />
        <div className="md:col-span-3">
          <h3 className="mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ink-3">Get in touch</h3>
          <ul className="space-y-3">
            {contact.email && (
              <li>
                <a className="transition-colors hover:text-ink" href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.phone && (
              <li>
                <a className="transition-colors hover:text-ink" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
            )}
            {whatsappUrl && (
              <li>
                <a className="transition-colors hover:text-ink" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            )}
            {contact.address && <li>{contact.address}</li>}
            <li>
              <Link className="font-medium text-accent" to="/contact">Start a project →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden className="container-x relative select-none overflow-hidden">
        <p className="headline translate-y-[18%] text-center text-[22vw] leading-none text-transparent [-webkit-text-stroke:1px_var(--border-strong)] md:text-[17vw] xl:text-[15rem]">
          Novarchin
        </p>
      </div>

      <div className="container-x relative flex flex-col gap-2 border-t border-line py-6 text-[13px] sm:flex-row sm:justify-between">
        <p>© {year} Novarchin. All rights reserved.</p>
        <p>Engineered in Africa, for the world.</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, links, className = '' }: { title: string; links: string[][]; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-[13px] font-medium uppercase tracking-[0.08em] text-ink-3">{title}</h3>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="transition-colors hover:text-ink">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
