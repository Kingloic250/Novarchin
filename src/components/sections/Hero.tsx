import { useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Button } from '../ui/Button'
import { WordReveal } from '../ui/Reveal'
import { easeOut } from '../../lib/motion'
import { AfricaMap } from '../map/AfricaMap'
import { company } from '../../content/site'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120])
  const mapY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Subtle pointer parallax on the map (mouse only).
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  function onPointerMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width - 0.5) * 18)
    py.set(((e.clientY - r.top) / r.height - 0.5) * 18)
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 lg:pb-0 lg:pt-20"
    >
      {/* Atmosphere */}
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="glow breathe -z-10 right-[-10%] top-[5%] size-[680px] lg:size-[900px]" />
      <div aria-hidden className="glow-soft -z-10 left-[-20%] bottom-[-20%] size-[600px]" />
      <motion.div
        aria-hidden
        className="beam -z-10 left-[-10%] top-[88%] w-[130%] origin-left -rotate-[18deg]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeOut, delay: 0.3 }}
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-elevated/60 py-1.5 pl-2 pr-4 text-[13px] text-ink-2 backdrop-blur"
          >
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-[12px] font-medium text-white">Kigali</span>
            Engineering across Africa
          </motion.p>

          <h1 className="headline text-[52px] sm:text-[72px] lg:text-[80px] xl:text-[96px]">
            <WordReveal text="Engineering Africa's *digital* future." delay={0.15} animateOnMount />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easeOut }}
            className="mt-7 max-w-lg text-[17px] leading-[1.6] text-ink-2 md:text-[19px]"
          >
            {company.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: easeOut }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact">Start a project</Button>
            <Button to="/services" variant="secondary">Explore services</Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink-3"
            aria-label="Focus areas"
          >
            {company.focus.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          style={{ y: mapY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: easeOut, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:col-span-6 lg:max-w-none"
        >
          <motion.div style={{ x: px, y: py }}>
            <AfricaMap className="w-full lg:ml-auto lg:w-[92%]" />
          </motion.div>
          <HubCard />
        </motion.div>
      </div>
    </section>
  )
}

/** Floating glass card anchored near Kigali. */
function HubCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6, ease: easeOut }}
      className="glass absolute bottom-[6%] left-0 hidden rounded-2xl border border-line-strong p-4 shadow-[var(--shadow-lg)] sm:block lg:left-[4%]"
    >
      <p className="text-[12px] uppercase tracking-[0.08em] text-ink-3">Headquarters</p>
      <p className="mt-1 font-display text-[17px] font-semibold tracking-[-0.02em]">Kigali, Rwanda</p>
      <p className="mt-0.5 text-[13px] text-ink-2">Serving clients across Africa</p>
    </motion.div>
  )
}
