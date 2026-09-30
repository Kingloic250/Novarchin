import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SpotlightCard } from '../ui/SpotlightCard'
import { Icon } from '../ui/Icon'
import { services } from '../../content/site'

/**
 * Bento grid of services. The first two cards span wider and carry a glow
 * graphic, echoing the video's feature tiles. `limit` shows a subset.
 */
export function ServicesBento({ limit, linkMore = false }: { limit?: number; linkMore?: boolean }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {list.map((s, i) => {
        const wide = i < 2
        return (
          <Reveal key={s.title} delay={(i % 3) * 0.06} className={wide ? 'lg:col-span-3' : 'lg:col-span-2'}>
            <SpotlightCard className={`h-full p-7 md:p-8 ${wide ? 'lg:min-h-[320px]' : 'lg:min-h-[260px]'}`}>
              {wide && (
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-70" />
              )}
              <div className="relative flex h-full flex-col">
                <div className={`orb ${wide ? 'size-14' : 'size-12'}`}>
                  <Icon name={s.icon} className={wide ? 'size-6' : 'size-5'} />
                </div>
                <div className="mt-auto pt-10">
                  <p className="font-mono text-[12px] text-ink-3 tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className={`mt-2 font-display font-semibold tracking-[-0.03em] ${wide ? 'text-[28px] leading-tight md:text-[32px]' : 'text-[21px]'}`}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.description}</p>
                  {linkMore && (
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex min-h-11 items-center gap-1 text-[14px] font-medium text-accent"
                      aria-label={`Discuss ${s.title}`}
                    >
                      Discuss a project
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        )
      })}
    </div>
  )
}
