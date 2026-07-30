import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, ArrowRight, CheckCircle2 } from 'lucide-react';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Case Studies', to: '/work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', to: '/services' },
      { label: 'AI & Automation', to: '/services' },
      { label: 'Cloud & DevOps', to: '/services' },
      { label: 'Cybersecurity', to: '/services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'hello@novarchin.studio', href: 'mailto:hello@novarchin.studio' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
];

const socials = [
  { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn' },
  { icon: <Twitter className="h-4 w-4" />, label: 'Twitter' },
  { icon: <Github className="h-4 w-4" />, label: 'GitHub' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setDone(true);
    setEmail('');
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <footer className="relative border-t border-sand-300 bg-sand-100/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="group flex items-center gap-2.5" aria-label="Novarchin home">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-wine-600 shadow-glow transition-transform group-hover:scale-105">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M8 24V8l8 10 8-10v16"
                    stroke="#EDB241"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-ink">
                Novarchin
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Engineering Africa's digital future through enterprise software, AI,
              cloud infrastructure, and transformative digital solutions.
            </p>

            <form onSubmit={subscribe} className="mt-6 max-w-sm">
              <label
                htmlFor="newsletter"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-soft"
              >
                Newsletter
              </label>
              <div className="flex items-center gap-2 rounded-2xl border border-sand-300 bg-sand-50 p-1.5 pl-4 focus-within:border-wine-600 focus-within:ring-2 focus-within:ring-wine-600/20">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-wine-700 text-amber-300 transition-all hover:bg-wine-800"
                  aria-label="Subscribe"
                >
                  {done ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
              {done && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-xs text-wine-700"
                >
                  Subscribed — thanks for following along.
                </motion.p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {'to' in l ? (
                        <Link
                          to={l.to}
                          className="group inline-flex items-center text-sm text-ink-soft transition-colors hover:text-wine-700"
                        >
                          <span className="relative">
                            {l.label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-wine-700 transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={l.href ?? '#'}
                          className="group inline-flex items-center text-sm text-ink-soft transition-colors hover:text-wine-700"
                        >
                          <span className="relative">
                            {l.label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-wine-700 transition-all duration-300 group-hover:w-full" />
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-sand-300 pt-8 sm:flex-row">
          <p className="text-xs text-ink-muted">
            &copy; {new Date().getFullYear()} Novarchin. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-xl border border-sand-300 bg-sand-50 text-ink-soft transition-all hover:border-wine-700 hover:bg-wine-700 hover:text-amber-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
