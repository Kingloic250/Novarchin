import { motion } from 'framer-motion'
import { Reveal, WordReveal } from '../ui/Reveal'
import { easeOut } from '../../lib/motion'
import { Button } from '../ui/Button'

/** Closing wine panel with a light beam, always dark for drama. */
export function CTA({
  title = "Let's build what's *next.*",
  body = 'Tell us about your challenge. We will come back with a clear plan, a realistic timeline and a team ready to deliver.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0708] px-6 py-20 text-center text-[#f5f1f2] md:px-16 md:py-28">
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,#5c0e1b_0%,transparent_60%)]" />
          <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#df6179]/60 to-transparent" />
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-[-40%] -z-10 h-[180%] w-[2px] -translate-x-1/2 rotate-[24deg] bg-gradient-to-b from-transparent via-[#df6179]/50 to-transparent shadow-[0_0_40px_8px_rgba(150,24,48,0.35)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: easeOut }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_100%,#000,transparent_70%)]"
          />
          <h2 className="headline mx-auto max-w-3xl text-[40px] sm:text-[56px] md:text-[72px] [&_.text-accent]:text-[#df6179]">
            <WordReveal text={title} />
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-[1.6] text-[#aaa2a4] md:text-[19px]">{body}</p>
          <div className="mt-10 flex justify-center">
            <Button to="/contact">Start a conversation</Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
