import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '@/components/MagneticButton';

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-5xl bg-ink px-8 py-20 text-center sm:px-16 sm:py-28"
        >
          {/* Animated gradient background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                'linear-gradient(120deg, #7a1f2b 0%, #6b1220 35%, #3a0912 60%, #c97617 100%)',
              backgroundSize: '200% 200%',
            }}
          >
            <div
              className="absolute inset-0 animate-gradient-pan"
              style={{
                background:
                  'radial-gradient(at 30% 30%, rgba(237,178,65,0.35) 0px, transparent 50%), radial-gradient(at 70% 70%, rgba(122,31,43,0.6) 0px, transparent 50%)',
                backgroundSize: '200% 200%',
              }}
            />
          </div>
          {/* Grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative">
            <h2 className="font-display text-display font-bold text-sand-50">
              Let's build something{' '}
              <span className="text-gradient-amber">great</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-sand-200">
              Tell us about your product. We'll bring the team, the process, and the
              obsession with getting it right.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticButton
                className="group inline-flex items-center gap-2 rounded-full bg-sand-50 px-8 py-4 text-sm font-medium text-wine-700 shadow-lift transition-all hover:bg-amber-300 hover:text-wine-900"
                onClick={() => (window.location.hash = '#contact')}
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
