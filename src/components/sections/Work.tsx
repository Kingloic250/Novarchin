import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { cn } from '@/lib/utils';

interface Project {
  name: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  accent: string;
  size: 'lg' | 'md';
}

const projects: Project[] = [
  {
    name: 'Vaultline',
    category: 'Fintech mobile app',
    description:
      'A banking app for freelancers — instant invoicing, multi-currency wallets, and real-time cashflow insights.',
    tags: ['iOS', 'Android', 'Design System'],
    gradient: 'from-wine-700 via-wine-800 to-wine-950',
    accent: 'text-amber-300',
    size: 'lg',
  },
  {
    name: 'Pulsewave',
    category: 'Healthtech dashboard',
    description:
      'A clinician-facing analytics platform turning wearable data into actionable care decisions.',
    tags: ['Web', 'React', 'D3'],
    gradient: 'from-amber-500 via-amber-600 to-wine-700',
    accent: 'text-sand-50',
    size: 'md',
  },
  {
    name: 'Greenhouse',
    category: 'Marketplace web app',
    description:
      'A B2B marketplace connecting sustainable suppliers with enterprise buyers — search, quotes, contracts.',
    tags: ['Next.js', 'Stripe', 'Search'],
    gradient: 'from-wine-600 via-wine-700 to-amber-600',
    accent: 'text-amber-200',
    size: 'md',
  },
  {
    name: 'Stratos',
    category: 'Travel companion app',
    description:
      'An offline-first travel planner with AI itineraries, shared trips, and live flight tracking.',
    tags: ['Flutter', 'AI', 'Offline'],
    gradient: 'from-ink via-wine-900 to-wine-800',
    accent: 'text-amber-300',
    size: 'lg',
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={cn(
        'group relative overflow-hidden rounded-4xl border border-sand-300 shadow-card',
        project.size === 'lg' ? 'lg:col-span-7' : 'lg:col-span-5',
      )}
    >
      <div
        className={cn(
          'relative aspect-[16/11] w-full bg-gradient-to-br',
          project.gradient,
        )}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Floating mock UI */}
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

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-7 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <p className={cn('max-w-md text-sm leading-relaxed', project.accent)}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 bg-sand-50 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-wine-700">
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
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sand-300 text-ink-soft transition-all duration-300 group-hover:border-wine-700 group-hover:bg-wine-700 group-hover:text-sand-50">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <RevealItem>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                Selected work
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-4 font-display text-display font-bold text-ink">
                Products we're <span className="text-gradient">proud</span> to have shipped.
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-wine-700"
            >
              Start your case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </RevealItem>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {projects.map((p) => (
            <RevealItem
              key={p.name}
              className={p.size === 'lg' ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
