import { type ReactNode } from 'react';
import {
  Code2, Monitor, Smartphone, Cpu, Banknote, Workflow,
  Palette, Shield, Compass,
} from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { TiltCard } from '@/components/TiltCard';
interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Custom Software Development',
    description: 'Tailored enterprise applications designed to solve your unique business challenges with clean, scalable code.',
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: 'Enterprise Systems',
    description: 'Robust ERP, CRM, and business process automation systems built for organizations at scale.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Web & Mobile Applications',
    description: 'Cross-platform and native apps with intuitive interfaces and performance-first architecture.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI & Automation',
    description: 'Intelligent automation, machine learning models, and AI-powered tools to transform your operations.',
  },
  {
    icon: <Banknote className="h-6 w-6" />,
    title: 'FinTech Solutions',
    description: 'Secure, compliant financial platforms including payment gateways, digital wallets, and banking systems.',
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for performance, security, and seamless third-party integration.',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'UI/UX Design',
    description: 'Human-centered design, accessibility-first interfaces, and design systems built for consistency.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Cybersecurity',
    description: 'Threat assessment, security audits, penetration testing, and compliance-driven security architecture.',
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: 'Technology Consulting',
    description: 'Strategic technology advisory, architecture reviews, and digital roadmap planning for leadership teams.',
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <TiltCard className="rounded-4xl border border-sand-300 bg-sand-50 p-7 shadow-soft">
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-sand-300 bg-sand-50 text-amber-400 shadow-glow transition-transform duration-300 group-hover:scale-110">
        {service.icon}
      </span>
      <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
        {service.description}
      </p>
    </TiltCard>
  );
}

export function Services() {
  return (
    <section id="services" className="section-glow-left relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Our Services
            </span>
          </RevealItem>
          <RevealWords
            text="End-to-end digital solutions for enterprises across Africa."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
          <RevealItem>
            <p className="mt-5 text-lg text-ink-muted">
              From strategy to deployment, we deliver full-stack technology services
              that move organizations forward.
            </p>
          </RevealItem>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <ServiceCard service={s} />
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
