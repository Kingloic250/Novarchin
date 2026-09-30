import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { lifecycle } from '../../content/site'
import { Reveal } from '../ui/Reveal'

/**
 * Pinned scroll story on large screens: the section sticks while the steps
 * cross-fade as you scroll. Falls back to a vertical timeline on small screens.
 */
export function LifecycleStory() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(lifecycle.length - 1, Math.max(0, Math.floor(v * lifecycle.length))))
  })

  const step = lifecycle[active]

  return (
    <>
      {/* Desktop: pinned story */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${lifecycle.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container-x grid grid-cols-12 items-center gap-10">
            <div className="col-span-7">
              <p className="eyebrow mb-4">How we deliver</p>
              <div className="relative min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24, transition: { duration: 0.25 } }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="font-serif text-[140px] italic leading-none text-accent/40 tabular-nums">
                      {String(active + 1).padStart(2, '0')}
                    </p>
                    <h3 className="headline mt-2 text-[72px]">{step.title}</h3>
                    <p className="mt-5 max-w-xl text-[21px] leading-[1.5] text-ink-2">{step.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <ol className="col-span-4 col-start-9 space-y-1">
              {lifecycle.map((s, i) => (
                <li key={s.title} className="flex items-center gap-4 py-2">
                  <span className="relative h-10 w-[3px] overflow-hidden rounded-full bg-line">
                    <motion.span
                      className="absolute inset-x-0 top-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
                      animate={{ height: i <= active ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </span>
                  <span
                    className={`text-[19px] font-medium transition-colors duration-300 ${
                      i === active ? 'text-ink' : i < active ? 'text-ink-2' : 'text-ink-3/60'
                    }`}
                  >
                    {s.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Mobile & tablet: vertical timeline */}
      <div className="container-x py-24 lg:hidden">
        <Reveal>
          <p className="eyebrow mb-3">How we deliver</p>
          <h2 className="headline text-[40px] sm:text-[48px]">From idea to impact, in seven steps.</h2>
        </Reveal>
        <ol className="relative mt-12 space-y-10 border-l border-line pl-8">
          {lifecycle.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[41px] top-1 grid size-5 place-items-center rounded-full border border-line bg-bg">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <Reveal>
                <p className="text-[13px] font-semibold text-accent tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-[24px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 text-ink-2">{s.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
