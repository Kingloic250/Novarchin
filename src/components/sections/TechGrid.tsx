import { motion } from 'framer-motion';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const categories = [
  {
    label: 'Frontend',
    techs: ['React', 'Angular', 'Vue', 'Flutter'],
  },
  {
    label: 'Backend',
    techs: ['Java', 'Spring Boot', 'Node.js', '.NET', 'Python'],
  },
  {
    label: 'Databases',
    techs: ['PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    label: 'Cloud',
    techs: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    label: 'AI',
    techs: ['OpenAI', 'TensorFlow', 'LangChain'],
  },
  {
    label: 'DevOps',
    techs: ['Docker', 'Kubernetes'],
  },
];

export function TechGrid() {
  return (
    <section id="stack" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Technology Stack
            </span>
          </RevealItem>
          <RevealWords
            text="Modern tools. Proven platforms. Enterprise grade."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <SectionReveal key={cat.label}>
              <RevealItem>
                <div className="rounded-4xl border border-sand-300 bg-sand-50/70 p-7 shadow-soft">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                    {cat.label}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.techs.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ y: -2, scale: 1.04 }}
                        className="rounded-full border border-sand-300 bg-sand-100 px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-wine-600/40 hover:bg-sand-50"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
