import { type ReactNode } from 'react';
import { Briefcase, Cpu, HardDrive, UserCog, LineChart } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

interface Member {
  icon: ReactNode;
  role: string;
  name: string;
  initials: string;
  accent: string;
}

const team: Member[] = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    role: 'Chief Executive Officer',
    name: 'Rutagengwa Bruce',
    initials: 'RB',
    accent: 'bg-wine-700 text-amber-300',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    role: 'Chief Technology Officer',
    name: 'CTO',
    initials: 'CT',
    accent: 'bg-amber-500 text-wine-800',
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    role: 'Head of Engineering',
    name: 'Head of Engineering',
    initials: 'HE',
    accent: 'bg-ink text-amber-300',
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    role: 'Operations Manager',
    name: 'Operations Manager',
    initials: 'OM',
    accent: 'bg-wine-800 text-amber-300',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    role: 'Business Development',
    name: 'Business Development',
    initials: 'BD',
    accent: 'bg-amber-600 text-wine-900',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Leadership Team
            </span>
          </RevealItem>
          <RevealWords
            text="The people driving Africa's digital transformation."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((m) => (
            <RevealItem key={m.role}>
              <div className="group flex flex-col items-center rounded-4xl border border-sand-300 bg-sand-50/70 p-8 text-center shadow-soft transition-shadow hover:shadow-lift">
                <span
                  className={`grid h-20 w-20 place-items-center rounded-full font-display text-2xl font-bold shadow-glow ${m.accent}`}
                >
                  {m.initials}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-wine-700">
                  {m.role}
                </p>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
