import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { cn } from '@/lib/utils';

interface Project {
  name: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  accent: string;
}

const projects: Project[] = [
  {
    name: 'Digital Banking Platform',
    category: 'FinTech',
    description:
      'A secure, scalable digital banking solution with multi-currency wallets, instant transfers, and real-time transaction monitoring for an African fintech startup.',
    tags: ['React', 'Java', 'PostgreSQL', 'AWS'],
    gradient: 'from-wine-700 via-wine-800 to-wine-950',
    accent: 'text-amber-300',
  },
  {
    name: 'Hospital Management System',
    category: 'HealthTech',
    description:
      'An integrated HMS covering patient records, appointment scheduling, billing, lab integration, and analytics for a network of hospitals across East Africa.',
    tags: ['Angular', '.NET', 'SQL Server', 'Azure'],
    gradient: 'from-amber-500 via-amber-600 to-wine-700',
    accent: 'text-white',
  },
  {
    name: 'NGO Impact Platform',
    category: 'Social Impact',
    description:
      'A donor management and field operations platform enabling real-time impact tracking, fund allocation, and beneficiary management for international NGOs.',
    tags: ['Vue', 'Python', 'MongoDB', 'GCP'],
    gradient: 'from-wine-600 via-wine-700 to-amber-600',
    accent: 'text-amber-200',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-4xl border border-sand-300 shadow-card"
    >
      <div
        className={cn(
          'relative aspect-[16/11] w-full bg-gradient-to-br',
          project.gradient,
        )}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-[58%] w-[72%] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.04]">
            <div className="flex items-center gap-1.5 border-b border-white/15 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="space-y-2 p-4">
              <div className="h-2 w-1/2 rounded-full bg-white/30" />
              <div className="h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-2 w-2/3 rounded-full bg-white/20" />
              <div className="mt-3 h-12 rounded-lg bg-white/15" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-7 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <p className={cn('max-w-md text-sm leading-relaxed', project.accent)}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 bg-sand-50 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-amber-600 dark:text-amber-300">
            {project.category}
          </span>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">
            {project.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-sand-300 bg-sand-100 px-2.5 py-0.5 text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sand-300 text-ink-soft transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-white dark:group-hover:text-sand-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="section-glow-left relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Case Studies
            </span>
          </RevealItem>
          <RevealWords
            text="Real solutions delivering real impact across Africa."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.name}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
