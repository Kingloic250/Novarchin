import { Link } from 'react-router-dom';
import { Code2, Cpu, Shield, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/hero/Hero';
import { Stats } from '@/components/sections/Stats';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { TiltCard } from '@/components/TiltCard';

const featuredServices = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Custom Software Development',
    description: 'Tailored enterprise applications designed to solve your unique business challenges with clean, scalable code.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'AI & Automation',
    description: 'Intelligent automation, machine learning models, and AI-powered tools to transform your operations.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Cybersecurity',
    description: 'Proactive security assessments, threat monitoring, and compliance solutions to protect your business.',
  },
];

function ServicesPreview() {
  return (
    <section id="services-preview" className="section-glow-left relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <RevealItem className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              What We Do
            </span>
            <RevealWords
              text="Solutions engineered for real business impact."
              as="h2"
              className="mt-4 font-display text-display font-bold text-gradient"
            />
          </RevealItem>
          <RevealItem>
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-sand-300 bg-sand-50 px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </RevealItem>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredServices.map((s) => (
            <RevealItem key={s.title}>
              <TiltCard className="group relative h-full rounded-4xl border border-sand-300 bg-sand-50 p-7 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-sand-300 bg-sand-50 text-amber-400 shadow-glow transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.description}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-glow-left relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="relative overflow-hidden rounded-5xl border border-sand-300 bg-sand-50 p-10 text-center shadow-soft sm:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
          <RevealItem>
            <RevealWords
              text="Let's build something transformative."
              as="h2"
              className="mx-auto max-w-2xl font-display text-display font-bold text-gradient"
            />
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Tell us about your project and our team will respond within one business day.
            </p>
          </RevealItem>
          <RevealItem>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-medium text-white shadow-lift transition-all hover:bg-amber-500 dark:text-sand-100"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </RevealItem>
        </SectionReveal>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <CTA />
    </>
  );
}