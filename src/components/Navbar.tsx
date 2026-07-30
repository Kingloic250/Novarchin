import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="Novarchin home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-wine-600 shadow-glow transition-transform duration-300 group-hover:scale-105">
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
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'services', 'work', 'contact'];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-nav border-b border-sand-300/70 py-3' : 'py-5 border-b border-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  active === l.href ? 'text-wine-700' : 'text-ink-soft hover:text-wine-700',
                )}
              >
                {l.label}
                <span
                  className={cn(
                    'absolute left-4 right-4 -bottom-0.5 h-px bg-wine-600 transition-transform duration-300',
                    active === l.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-sand-50 transition-all hover:bg-wine-700 hover:shadow-glow"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-sand-300 bg-sand-50/60 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 text-ink" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 text-ink" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-sand-50/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="relative flex h-full flex-col px-6 pt-28 pb-10"
            >
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                    className={cn(
                      'border-b border-sand-300 py-5 font-display text-3xl font-semibold transition-colors',
                      active === l.href ? 'text-wine-700' : 'text-ink hover:text-wine-700',
                    )}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-wine-700 px-6 py-4 text-base font-medium text-sand-50"
              >
                Start a Project
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
