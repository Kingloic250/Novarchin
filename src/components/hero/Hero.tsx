import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/MagneticButton';

const Hero3D = lazy(() => import('./Hero3D'));

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg opacity-80" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-wine-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] -z-10 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-wine-600/20 bg-wine-50/60 px-3.5 py-1.5 text-xs font-medium text-wine-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Product studio · Mobile & Web
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-hero font-bold text-ink"
          >
            We build mobile & web products that{' '}
            <span className="text-gradient">move fast</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Novarchin is a product studio turning ambitious ideas into apps people
            actually want to use — engineered for speed, designed for delight.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              className="group inline-flex items-center gap-2 rounded-full bg-wine-700 px-7 py-3.5 text-sm font-medium text-sand-50 shadow-lift transition-all hover:bg-wine-800"
              onClick={() => (window.location.hash = '#contact')}
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              strength={0.25}
              className="group inline-flex items-center gap-2 rounded-full border border-sand-400 bg-sand-50/60 px-7 py-3.5 text-sm font-medium text-ink transition-all hover:border-wine-600/40 hover:bg-sand-50"
              onClick={() => (window.location.hash = '#work')}
            >
              <Play className="h-4 w-4 text-wine-700" />
              View Our Work
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-8 text-sm text-ink-muted"
          >
            <div>
              <div className="font-display text-2xl font-bold text-ink">120+</div>
              <div className="text-xs">Products shipped</div>
            </div>
            <div className="h-8 w-px bg-sand-300" />
            <div>
              <div className="font-display text-2xl font-bold text-ink">9 yrs</div>
              <div className="text-xs">In the craft</div>
            </div>
            <div className="h-8 w-px bg-sand-300" />
            <div>
              <div className="font-display text-2xl font-bold text-ink">40+</div>
              <div className="text-xs">Clients worldwide</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-wine-600/10 to-amber-400/10 blur-2xl" />
            <div className="relative h-full w-full">
              <Suspense
                fallback={
                  <div className="grid h-full w-full place-items-center">
                    <div className="h-16 w-16 animate-spin-slow rounded-full border-2 border-wine-600/30 border-t-wine-700" />
                  </div>
                }
              >
                <Hero3D />
              </Suspense>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
