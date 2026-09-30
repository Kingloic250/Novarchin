import { motion } from 'framer-motion'
import { WordReveal } from './Reveal'
import { easeOut } from '../../lib/motion'

/** Inner-page header: grid lines, a wine light beam and a soft glow. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 md:pb-28 md:pt-48">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden className="glow breathe -z-10 left-1/2 top-[-260px] size-[760px] -translate-x-1/2" />
      <motion.div
        aria-hidden
        className="beam -z-10 left-[-10%] top-[34%] w-[120%] -rotate-[8deg]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: easeOut, delay: 0.2 }}
      />
      <div className="container-x text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="eyebrow mb-6"
        >
          {eyebrow}
        </motion.p>
        <h1 className="headline mx-auto max-w-4xl text-[44px] sm:text-[64px] md:text-[84px]">
          <WordReveal text={title} delay={0.1} animateOnMount />
        </h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: easeOut }}
            className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.6] text-ink-2 md:text-[19px]"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  )
}
