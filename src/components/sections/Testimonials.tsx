import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Novarchin shipped our iOS app in ten weeks. It felt like having a senior product team drop into our company overnight — the craft was obvious from the first demo.",
    name: 'Mara Lindqvist',
    title: 'CEO, Vaultline',
    initials: 'ML',
    accent: 'bg-wine-700 text-amber-300',
  },
  {
    quote:
      "The web app they built became our core product. Clean architecture, beautiful UI, and a team that actually cared about our users.",
    name: 'David Okafor',
    title: 'CPO, Pulsewave',
    initials: 'DO',
    accent: 'bg-amber-500 text-wine-800',
  },
  {
    quote:
      "We came in with a rough idea and left with a funded MVP. Their strategy phase alone was worth the engagement.",
    name: 'Sofia Reyes',
    title: 'Founder, Greenhouse',
    initials: 'SR',
    accent: 'bg-ink text-amber-300',
  },
  {
    quote:
      "Best engineering partner we've worked with. Responsive, opinionated in the right ways, and obsessed with shipping.",
    name: 'Tomás Bauer',
    title: 'CTO, Stratos',
    initials: 'TB',
    accent: 'bg-wine-800 text-amber-300',
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setSnapCount(embla.scrollSnapList().length);
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <RevealItem>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                Testimonials
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-4 font-display text-display font-bold text-ink">
                What founders <span className="text-gradient">say</span>.
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <div className="flex gap-2">
              <button
                onClick={() => embla?.scrollPrev()}
                className="grid h-11 w-11 place-items-center rounded-full border border-sand-300 bg-sand-50 text-ink-soft transition-all hover:border-wine-700 hover:bg-wine-700 hover:text-sand-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => embla?.scrollNext()}
                className="grid h-11 w-11 place-items-center rounded-full border border-sand-300 bg-sand-50 text-ink-soft transition-all hover:border-wine-700 hover:bg-wine-700 hover:text-sand-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </RevealItem>
        </SectionReveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] pl-0 sm:flex-[0_0_60%] sm:pl-6 lg:flex-[0_0_50%] [&:first-child]:pl-0"
              >
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="glass h-full rounded-4xl p-8 shadow-card"
                >
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-lg leading-relaxed text-ink">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3">
                    <span
                      className={cn(
                        'grid h-11 w-11 place-items-center rounded-full font-display text-sm font-semibold',
                        t.accent,
                      )}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <div className="font-medium text-ink">{t.name}</div>
                      <div className="text-sm text-ink-muted">{t.title}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all',
                i === selected ? 'w-8 bg-wine-700' : 'w-2 bg-sand-400',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
