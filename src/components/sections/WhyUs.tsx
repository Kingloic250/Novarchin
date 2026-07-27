import { motion } from 'framer-motion';
import { Shield, LayoutGrid, Timer, MessageSquareText, HeartHandshake, User, ArrowRight } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const reasons = [
  { icon: <Shield className="h-5 w-5" />, text: 'Enterprise-grade security' },
  { icon: <LayoutGrid className="h-5 w-5" />, text: 'Scalable architecture' },
  { icon: <Timer className="h-5 w-5" />, text: 'Agile delivery' },
  { icon: <MessageSquareText className="h-5 w-5" />, text: 'Transparent communication' },
  { icon: <HeartHandshake className="h-5 w-5" />, text: 'Long-term partnership' },
  { icon: <User className="h-5 w-5" />, text: 'Customer-centric approach' },
];

const advantageSteps = [
  'Business Challenge',
  'Digital Strategy',
  'Solution Design',
  'Development',
  'Deployment',
  'Measurable Impact',
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
              Why Choose Us
            </span>
          </RevealItem>
          <RevealWords
            text="Built for the businesses shaping Africa's future."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SectionReveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <RevealItem key={r.text}>
                  <div className="flex items-center gap-4 rounded-2xl border border-sand-300 bg-sand-50/70 p-5 shadow-soft">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-wine-700 text-amber-300">
                      {r.icon}
                    </span>
                    <span className="text-sm font-medium text-ink">{r.text}</span>
                  </div>
                </RevealItem>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <RevealItem>
              <div className="rounded-4xl border border-sand-300 bg-sand-50/70 p-8 shadow-soft">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                  Competitive Advantage
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Our proven methodology transforms business challenges into measurable outcomes.
                </p>
                <div className="mt-6 space-y-2">
                  {advantageSteps.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wine-700 text-xs font-semibold text-amber-300"
                      >
                        {i + 1}
                      </motion.div>
                      <span className="text-sm font-medium text-ink">{step}</span>
                      {i < advantageSteps.length - 1 && (
                        <ArrowRight className="ml-auto h-4 w-4 text-wine-700/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </RevealItem>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
