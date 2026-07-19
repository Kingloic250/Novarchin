import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';

interface Tech {
  name: string;
  icon: ReactNode;
}

const techs: Tech[] = [
  { name: 'React', icon: <span className="font-display text-2xl font-bold">R</span> },
  { name: 'Swift', icon: <span className="font-display text-2xl font-bold">S</span> },
  { name: 'Kotlin', icon: <span className="font-display text-2xl font-bold">K</span> },
  { name: 'Flutter', icon: <span className="font-display text-2xl font-bold">F</span> },
  { name: 'Node.js', icon: <span className="font-display text-2xl font-bold">N</span> },
  { name: 'TypeScript', icon: <span className="font-display text-2xl font-bold">TS</span> },
  { name: 'Next.js', icon: <span className="font-display text-2xl font-bold">N</span> },
  { name: 'AWS', icon: <span className="font-display text-2xl font-bold">A</span> },
  { name: 'Figma', icon: <span className="font-display text-2xl font-bold">F</span> },
  { name: 'Postgres', icon: <span className="font-display text-2xl font-bold">P</span> },
  { name: 'GraphQL', icon: <span className="font-display text-2xl font-bold">GQ</span> },
  { name: 'Docker', icon: <span className="font-display text-2xl font-bold">D</span> },
];

export function TechGrid() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-12 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Capabilities
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-display font-bold text-ink">
              The tools we <span className="text-gradient">reach for</span>.
            </h2>
          </RevealItem>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {techs.map((t) => (
            <RevealItem key={t.name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-sand-300 bg-sand-50/70 shadow-soft transition-colors hover:border-wine-600/40 hover:bg-sand-50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine-700 text-amber-300 shadow-glow transition-transform group-hover:scale-110">
                  {t.icon}
                </span>
                <span className="text-xs font-medium text-ink-soft">{t.name}</span>
              </motion.div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
