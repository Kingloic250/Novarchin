import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const visionData = [
  {
    title: 'Our Vision',
    text: "Become Africa's leading technology innovation company.",
    gradient: 'text-gradient',
  },
  {
    title: 'Our Mission',
    text: 'Design and deliver world-class digital products that empower organizations to innovate, automate and grow.',
    gradient: 'text-gradient',
  },
  {
    title: 'Our Purpose',
    text: "Accelerate Africa's digital transformation.",
    gradient: 'text-gradient-amber',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-3xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Company Overview
            </span>
          </RevealItem>
          <RevealWords
            text="We are an emerging technology company focused on delivering secure, scalable, and innovative digital solutions for businesses, governments, NGOs and enterprises across Africa."
            as="h2"
            className="mt-4 font-display text-display font-bold text-ink"
          />
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              We build custom software, enterprise systems, AI solutions, fintech platforms,
              cloud infrastructure, and digital ecosystems that drive transformation.
            </p>
          </RevealItem>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {visionData.map((v) => (
            <SectionReveal key={v.title} className="relative overflow-hidden rounded-4xl border border-sand-300 bg-sand-50/70 p-8 shadow-soft">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-wine-600/8 blur-3xl" />
              <RevealItem>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                  {v.title}
                </p>
              </RevealItem>
              <RevealItem>
                <p className={`mt-3 font-display text-xl font-semibold ${v.gradient}`}>
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
