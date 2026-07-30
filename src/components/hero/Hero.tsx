import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { RevealWords } from '@/components/RevealWords';
import { MagneticButton } from '@/components/MagneticButton';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg opacity-80" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-wine-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-wine-600/20 bg-wine-50/60 px-3.5 py-1.5 text-xs font-medium text-wine-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Engineering Africa's Digital Future
          </motion.div>

          <RevealWords
            text="Engineering Africa's Digital Future"
            as="h1"
            className="font-display text-hero font-bold text-ink"
            delay={0.15}
          />

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Enterprise Software · Artificial Intelligence · Cybersecurity · Digital Transformation
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted"
          >
            We empower organizations across Africa with intelligent digital solutions that improve efficiency, drive innovation, and unlock growth.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              className="group inline-flex items-center gap-2 rounded-full bg-wine-700 px-7 py-3.5 text-sm font-medium text-sand-50 shadow-lift transition-all hover:bg-wine-800"
              onClick={() => navigate('/contact')}
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              strength={0.25}
              className="group inline-flex items-center gap-2 rounded-full border border-sand-400 bg-sand-50/60 px-7 py-3.5 text-sm font-medium text-ink transition-all hover:border-wine-600/40 hover:bg-sand-50"
              onClick={() => navigate('/services')}
            >
              Explore Services
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-8 text-sm text-ink-muted"
          >
            <div>
              <div className="font-display text-2xl font-bold text-ink">30+</div>
              <div className="text-xs">Solutions delivered</div>
            </div>
            <div className="h-8 w-px bg-sand-300" />
            <div>
              <div className="font-display text-2xl font-bold text-ink">4 yrs</div>
              <div className="text-xs">In the craft</div>
            </div>
            <div className="h-8 w-px bg-sand-300" />
            <div>
              <div className="font-display text-2xl font-bold text-ink">20+</div>
              <div className="text-xs">Clients worldwide</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block lg:col-span-4"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm rounded-[2.5rem] border border-sand-300 bg-sand-50/70 p-8 shadow-card">
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-wine-600/5 to-amber-400/5" />
            <div className="relative flex h-full flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                CEO Message
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                "At Novarchin, we believe technology should solve real business challenges,
                not create new ones. Our mission is to empower organizations across Africa
                with intelligent digital solutions that improve efficiency, drive innovation,
                and unlock growth."
              </blockquote>
              <div className="border-t border-sand-300 pt-4">
                <p className="text-xs text-ink-muted">Rutagengwa Bruce</p>
                <p className="font-display text-xl font-bold text-ink">CEO, Novarchin</p>
                <div className="mt-2 h-px w-16 bg-wine-700" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
