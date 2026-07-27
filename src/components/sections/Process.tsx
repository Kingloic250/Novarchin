import { motion } from 'framer-motion';
import { Search, ClipboardList, PenTool, Code2, CheckCircle2, Rocket, HeadphonesIcon } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const steps = [
  {
    n: '01',
    icon: <Search className="h-5 w-5" />,
    title: 'Discovery',
    description: 'We dive deep into your goals, users, and constraints through workshops and research to define the problem clearly.',
  },
  {
    n: '02',
    icon: <ClipboardList className="h-5 w-5" />,
    title: 'Requirements',
    description: 'Detailed functional and technical specifications are documented, reviewed, and signed off before any build begins.',
  },
  {
    n: '03',
    icon: <PenTool className="h-5 w-5" />,
    title: 'Design',
    description: 'Architecture blueprints, system design, wireframes, and high-fidelity prototypes that align with your vision.',
  },
  {
    n: '04',
    icon: <Code2 className="h-5 w-5" />,
    title: 'Development',
    description: 'Agile engineering with iterative sprints, daily stand-ups, and weekly demos to keep you in the loop.',
  },
  {
    n: '05',
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: 'QA',
    description: 'Rigorous testing — unit, integration, performance, and security — to ensure production-ready quality.',
  },
  {
    n: '06',
    icon: <Rocket className="h-5 w-5" />,
    title: 'Deployment',
    description: 'Smooth deployment to staging and production environments with automated CI/CD pipelines and rollback plans.',
  },
  {
    n: '07',
    icon: <HeadphonesIcon className="h-5 w-5" />,
    title: 'Support',
    description: 'Post-launch monitoring, maintenance, and iteration support to ensure long-term success.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Software Development Lifecycle
            </span>
          </RevealItem>
          <RevealWords
            text="From concept to continuous support — a proven delivery framework."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-wine-700 via-wine-600 to-amber-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <SectionReveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
