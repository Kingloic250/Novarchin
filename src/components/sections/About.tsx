import { Eye, Rocket, Heart } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const visionData = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Our Vision',
    text: "Become Africa's leading technology innovation company.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Our Mission',
    text: 'Design and deliver world-class digital products that empower organizations to innovate, automate and grow.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Our Purpose',
    text: "Accelerate Africa's digital transformation.",
  },
];

export function About() {
  return (
    <section id="about" className="section-glow-left relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-3xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Company Overview
            </span>
          </RevealItem>
          <RevealWords
            text="Secure, scalable, innovative digital solutions for Africa."
            as="h2"
            className="mt-4 font-display text-display font-bold text-ink"
          />
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              We build custom software, enterprise systems, AI solutions, fintech platforms,
              digital ecosystems that drive transformation.
            </p>
          </RevealItem>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {visionData.map((v) => (
            <SectionReveal key={v.title} className="relative overflow-hidden rounded-4xl border border-sand-300 bg-sand-50 p-8 shadow-soft">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-wine-600/8 blur-3xl" />
              <RevealItem>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-sand-300 bg-sand-50 text-amber-400 shadow-glow">
                  {v.icon}
                </span>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
                  {v.title}
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-2 font-display text-xl font-semibold text-ink">
                  {v.text}
                </p>
              </RevealItem>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
