import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 120, suffix: '+', label: 'Solutions delivered' },
  { value: 40, suffix: '+', label: 'Clients worldwide' },
  { value: 9, suffix: ' yrs', label: 'In the craft' },
  { value: 98, suffix: '%', label: 'Client retention' },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const value = useCountUp(stat.value, inView);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-display text-5xl font-bold text-gradient sm:text-6xl"
      >
        {value}
        {stat.suffix}
      </motion.div>
      <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="relative overflow-hidden rounded-5xl border border-sand-300 bg-sand-100/70 p-10 shadow-soft sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-wine-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <StatCounter stat={s} />
              </RevealItem>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
