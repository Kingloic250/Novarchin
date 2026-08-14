import { type ReactNode } from 'react';
import { Briefcase, Cpu, HardDrive, Megaphone } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { TiltCard } from '@/components/TiltCard';

interface Member {
  icon: ReactNode;
  role: string;
  name: string;
  initials: string;
  image?: string;
  accent: string;
}

const team: Member[] = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    role: 'Chief Executive Officer',
    name: 'Bruce RUTAGENGWA',
    initials: 'BR',
    image: '/bruce.jpeg',
    accent: 'bg-amber-400 text-white dark:text-sand-100',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    role: 'Chief Technology Officer',
    name: 'Brian Ganza GISAGARA',
    initials: 'BG',
    image: '/brian.jpeg',
    accent: 'bg-amber-400 text-white dark:text-sand-100',
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    role: 'Head of Engineering',
    name: 'Loic Mparabanyi RUDAHIGWA',
    initials: 'LR',
    image: '/loic.jpeg',
    accent: 'bg-amber-400 text-white dark:text-sand-100',
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    role: 'Sales and Marketing Manager',
    name: 'Akaliza BLESSING',
    initials: 'AB',
    image: '/akaliza.jpeg',
    accent: 'bg-amber-400 text-white dark:text-sand-100',
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="section-glow relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Leadership Team
            </span>
          </RevealItem>
          <RevealWords
            text="The people driving Africa's digital transformation."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <RevealItem key={m.role}>
              <TiltCard className="flex flex-col items-center rounded-4xl border border-sand-300 bg-sand-50 p-8 text-center shadow-soft">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-24 w-24 rounded-full border border-sand-300 object-cover shadow-glow"
                  />
                ) : (
                  <span
                    className={`grid h-20 w-20 place-items-center rounded-full font-display text-2xl font-bold shadow-glow ${m.accent}`}
                  >
                    {m.initials}
                  </span>
                )}
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-amber-600 dark:text-amber-300">
                  {m.role}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
