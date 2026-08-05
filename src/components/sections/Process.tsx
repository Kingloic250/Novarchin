import { Search, ClipboardList, PenTool, Code2, CheckCircle2, Rocket, HeadphonesIcon } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { TiltCard } from '@/components/TiltCard';

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
    description: 'Rigorous testing: unit, integration, performance, and security to ensure production-ready quality.',
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
    <section id="process" className="section-glow relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Software Development Lifecycle
            </span>
          </RevealItem>
          <RevealWords
            text="Software Development Lifecycle"
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
          <RevealItem>
            <p className="mt-5 text-lg text-ink-muted">
              From concept to continuous support. A proven delivery framework.
            </p>
          </RevealItem>
        </SectionReveal>

          <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <TiltCard className="rounded-4xl border border-sand-300 bg-sand-50 p-7 shadow-soft">
                  <div className="relative flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-sand-300 bg-sand-50 text-amber-400 shadow-glow transition-transform duration-300 group-hover:scale-110">
                      {s.icon}
                    </span>
                    <div>
                      <span className="font-display text-xs font-semibold text-amber-400/40">
                        {s.n}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </TiltCard>
              </RevealItem>
            ))}
          </SectionReveal>
      </div>
    </section>
  );
}
