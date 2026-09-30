import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Logo } from './Logo'
import { useTheme } from '../../hooks/useTheme'
import { easeOut } from '../../lib/motion'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-full border pl-5 pr-2 transition-all duration-500 ease-out-expo ${
          scrolled || open ? 'glass border-line shadow-[var(--shadow-md)]' : 'border-transparent'
        }`}
      >
        <Link to="/" className="text-[18px] text-ink" aria-label="Novarchin home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="relative rounded-full px-4 py-2 text-[14px]">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-elevated-2 ring-1 ring-line"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative transition-colors ${isActive ? 'text-ink' : 'text-ink-2 hover:text-ink'}`}>
                    {l.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className="relative grid size-11 place-items-center overflow-hidden rounded-full text-ink-2 transition-colors hover:text-ink"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ y: 14, opacity: 0, rotate: -40 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -14, opacity: 0, rotate: 40 }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                {theme === 'dark' ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Link
            to="/contact"
            className="hidden min-h-10 items-center rounded-full border border-white/10 bg-brand px-5 text-[14px] font-medium text-white shadow-[0_8px_24px_-8px_var(--glow)] transition-colors hover:bg-brand-hover md:inline-flex"
          >
            Start a project
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="glass mx-auto mt-2 max-w-[1240px] origin-top overflow-hidden rounded-[28px] border border-line p-3 shadow-[var(--shadow-lg)] md:hidden"
          >
            <ul className="flex flex-col">
              {[{ to: '/', label: 'Home' }, ...navLinks].map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, ease: easeOut }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `flex min-h-12 items-center rounded-2xl px-4 font-display text-[24px] font-semibold tracking-[-0.03em] ${
                        isActive ? 'bg-elevated-2 text-ink' : 'text-ink-2'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-2 flex min-h-12 items-center justify-center rounded-2xl bg-brand text-[16px] font-medium text-white"
            >
              Start a project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
