import { motion, useReducedMotion } from 'framer-motion'
import { advantage } from '../../content/site'

/** Business Challenge → … → Measurable Impact, drawn as a flowing path. */
export function AdvantageFlow() {
  const reduce = useReducedMotion()
  return (
    <ol className="relative grid gap-3 md:grid-cols-6 md:gap-0">
      <motion.span
        aria-hidden
        className="absolute left-[8%] right-[8%] top-7 hidden h-px origin-left bg-gradient-to-r from-line via-accent/60 to-accent md:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {advantage.map((step, i) => {
        const last = i === advantage.length - 1
        return (
          <motion.li
            key={step}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.18 }}
            className="relative flex items-center gap-4 md:flex-col md:gap-5 md:px-2 md:text-center"
          >
            <span
              className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border text-[15px] font-semibold tabular-nums ${
                last
                  ? 'border-accent/40 bg-brand text-white shadow-[0_0_0_8px_color-mix(in_srgb,var(--brand)_25%,transparent),0_0_30px_var(--glow)]'
                  : 'border-line bg-elevated text-ink shadow-[var(--shadow-sm)]'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={`text-[17px] font-medium leading-snug ${last ? 'text-accent' : ''}`}>{step}</span>
          </motion.li>
        )
      })}
    </ol>
  )
}
