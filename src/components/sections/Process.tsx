import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';

const steps = [
  {
    n: '01',
    icon: <Search className="h-5 w-5" />,
    title: 'Discover',
    description:
      'We dig into your goals, users, and constraints. Workshops, research, and a sharp problem statement before a line of code.',
  },
  {
    n: '02',
    icon: <PenTool className="h-5 w-5" />,
    title: 'Design',
    description:
      'Flows, wireframes, and a high-fidelity prototype you can click through. We design the system, not just the screens.',
  },
  {
    n: '03',
    icon: <Code2 className="h-5 w-5" />,
    title: 'Build',
    description:
      'Engineering in tight iterations with weekly demos. Clean, tested, and production-ready from the first commit.',
  },
  {
    n: '04',
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch',
    description:
      'We ship to the store or prod, instrument analytics, and stay on to iterate. Launch is a milestone, not the finish line.',
  },
];

export function Process() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              How we work
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-display font-bold text-ink">
              A process built for <span className="text-gradient">momentum</span>.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-ink-muted">
              Four phases, one rhythm. Every engagement runs on weekly demos and
              decisions you can see — no black boxes.
            </p>
          </RevealItem>
        </SectionReveal>

        <div className="relative">
          {/* Animated connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-wine-700 via-wine-600 to-amber-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <SectionReveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="relative">
                  <div className="relative z-10 mb-6 grid h-22 w-22 place-items-center rounded-2xl border border-sand-300 bg-sand-50 p-5 shadow-soft">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-wine-700 text-amber-300">
                      {s.icon}
                    </span>
                  </div>
                  <span className="absolute left-0 top-0 font-display text-sm font-semibold text-wine-700/40">
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
