import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';
import { ArrowUpRight, Smartphone, Monitor, Palette, Compass } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { cn } from '@/lib/utils';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  span?: boolean;
}

const services: Service[] = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile App Development',
    description:
      'Native iOS, Android, and cross-platform apps built with Swift, Kotlin, and Flutter — fast, fluid, and ready for the App Store.',
    tags: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
    span: true,
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Web App Development',
    description:
      'Production web apps with React, Next.js, and TypeScript — scalable architectures and pixel-perfect interfaces.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'UI/UX Design',
    description:
      'Design systems and interfaces that feel obvious in the best way — research-led, prototype-driven, accessible.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: 'Product Strategy',
    description:
      'From zero to roadmap — we help shape the product, validate the bet, and ship the MVP that proves it.',
    tags: ['Discovery', 'Roadmaps', 'MVP'],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(sry, [-0.5, 0.5], ['-7deg', '7deg']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn(
        'group relative overflow-hidden rounded-4xl border border-sand-300 bg-sand-50/70 p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift',
        service.span && 'sm:col-span-2',
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-wine-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine-700 text-amber-300 shadow-glow transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wine-700" />
      </div>
      <h3 className="relative mt-6 font-display text-2xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
        {service.description}
      </p>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {service.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-sand-300 bg-sand-100 px-2.5 py-1 text-xs font-medium text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              What we do
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 font-display text-display font-bold text-ink">
              Four disciplines, one <span className="text-gradient">obsession</span> —
              shipping products that feel right.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-ink-muted">
              We blend strategy, design, and engineering into a single workflow so your
              product moves from idea to launch without the seams showing.
            </p>
          </RevealItem>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title} className={s.span ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
