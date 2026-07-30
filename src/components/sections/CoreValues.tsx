import { type ReactNode } from 'react';
import { Lightbulb, Award, ShieldCheck, Handshake, GitBranch, BookOpen, Target } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

interface Value {
  icon: ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Innovation',
    description: 'We push boundaries and embrace emerging technologies to deliver forward-thinking solutions.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of quality in every product we build.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical responsibility in all we do.',
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: 'Customer Success',
    description: 'Our clients success is our success. We are partners in their growth journey.',
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: 'Collaboration',
    description: 'We believe the best solutions emerge from diverse teams working together.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Continuous Learning',
    description: 'Technology evolves fast, and so do we. Learning is embedded in our culture.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Impact',
    description: 'We measure success by the real-world change our solutions create.',
  },
];

export function CoreValues() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Core Values
            </span>
          </RevealItem>
          <RevealWords
            text="The principles that guide everything we build."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <RevealItem key={v.title}>
              <div className="group relative overflow-hidden rounded-4xl border border-sand-300 bg-sand-50/70 p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-wine-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine-700 text-amber-300 shadow-glow transition-transform duration-300 group-hover:scale-110">
                  {v.icon}
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
