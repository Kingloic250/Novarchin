import { type ReactNode } from 'react';
import { Brain, HeartPulse, BookOpen, Link, Building2, Landmark, Fingerprint, Wifi } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

const futureItems: { icon: ReactNode; label: string }[] = [
  { icon: <Brain className="h-5 w-5" />, label: 'Artificial Intelligence' },
  { icon: <Building2 className="h-5 w-5" />, label: 'GovTech' },
  { icon: <HeartPulse className="h-5 w-5" />, label: 'HealthTech' },
  { icon: <BookOpen className="h-5 w-5" />, label: 'EdTech' },
  { icon: <Link className="h-5 w-5" />, label: 'Blockchain' },
  { icon: <Landmark className="h-5 w-5" />, label: 'Smart Cities' },
  { icon: <Fingerprint className="h-5 w-5" />, label: 'Digital Identity' },
  { icon: <Wifi className="h-5 w-5" />, label: 'IoT' },
];

export function CSR() {
  return (
    <section id="csr" className="section-glow relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-16 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Corporate Social Responsibility
            </span>
          </RevealItem>
          <RevealWords
            text="Building a better Africa through technology and education."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
          <RevealItem>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              We are committed to supporting youth digital skills, innovation, education, and
              sustainable development initiatives across Africa. Technology is our tool, but
              people are our purpose.
            </p>
          </RevealItem>
        </SectionReveal>

        <div className="relative overflow-hidden rounded-5xl border border-sand-300 bg-ink px-8 py-16 sm:px-16 sm:py-20 dark:bg-sand-50">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 dark:bg-[radial-gradient(90%_120%_at_100%_0%,var(--sand-400)_0%,var(--sand-100)_45%,transparent_80%)]"
            style={{
              background:
                'linear-gradient(120deg, var(--wine-600) 0%, var(--wine-700) 35%, var(--wine-950) 60%, var(--amber-400) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="orb -right-10 top-1/2 h-28 w-28 -z-10 -translate-y-1/2 opacity-70" />

          <div className="relative">
            <SectionReveal>
              <RevealItem>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                  Future Vision
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="mt-3 font-display text-display font-bold text-sand-50 dark:text-white">
                  What's next for{' '}
                  <span className="text-amber-300 dark:text-amber-400">Novarchin</span>.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-sand-300 dark:text-ink-soft">
                  We are investing in emerging technologies that will define the next decade of
                  Africa's digital landscape. Our roadmap is built around these focus areas.
                </p>
              </RevealItem>
            </SectionReveal>

            <SectionReveal className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {futureItems.map((item) => (
                <RevealItem key={item.label}>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-4 pl-5 backdrop-blur-sm transition-all duration-300 dark:border-sand-300 dark:bg-sand-50 dark:hover:border-[color:rgba(var(--accent-rgb),0.4)] dark:hover:brightness-110">
                    <span className="text-amber-300 dark:text-amber-400">{item.icon}</span>
                    <span className="text-sm font-semibold text-sand-800 dark:text-white">{item.label}</span>
                  </div>
                </RevealItem>
              ))}
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
