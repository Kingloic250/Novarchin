import { type ReactNode } from 'react';
import {
  Landmark, Heart, GraduationCap, Building2, ShoppingCart,
  Globe, Factory, Hotel,
} from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';

interface Industry {
  icon: ReactNode;
  name: string;
}

const industries: Industry[] = [
  { icon: <Landmark className="h-6 w-6" />, name: 'Banking & FinTech' },
  { icon: <Heart className="h-6 w-6" />, name: 'Healthcare' },
  { icon: <GraduationCap className="h-6 w-6" />, name: 'Education' },
  { icon: <Building2 className="h-6 w-6" />, name: 'Government' },
  { icon: <ShoppingCart className="h-6 w-6" />, name: 'Retail & E-commerce' },
  { icon: <Globe className="h-6 w-6" />, name: 'NGOs' },
  { icon: <Factory className="h-6 w-6" />, name: 'Manufacturing' },
  { icon: <Hotel className="h-6 w-6" />, name: 'Hospitality' },
];

export function Industries() {
  return (
    <section id="industries" className="section-glow relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              Industries Served
            </span>
          </RevealItem>
          <RevealWords
            text="Sector expertise that spans the African economy."
            as="h2"
            className="mt-4 font-display text-display font-bold text-gradient"
          />
        </SectionReveal>

        <SectionReveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <RevealItem key={ind.name}>
              <div className="group flex flex-col items-center gap-4 rounded-3xl border border-sand-300 bg-sand-50 p-8 shadow-soft transition-all hover:border-amber-400/40 hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-sand-300 bg-sand-50 text-amber-400 shadow-glow transition-transform group-hover:scale-110">
                  {ind.icon}
                </span>
                <span className="text-center text-sm font-medium text-ink-soft">
                  {ind.name}
                </span>
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
