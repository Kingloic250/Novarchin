import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { AfricaMap } from '../map/AfricaMap'
import { cities, hub, regions } from '../map/africa'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

/** Interactive pan-African coverage: hover or focus a market to light up its route. */
export function Coverage() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="glow -z-10 right-[-15%] top-[10%] size-[700px]" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            align="left"
            eyebrow="Where we work"
            title="Rooted in *Kigali*. Built for Africa."
            intro="From our headquarters in Rwanda we design, build and support digital products for organizations across the continent."
          />
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-accent/30 bg-brand/15 px-4 py-3">
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
                <MapPin className="size-4" aria-hidden />
              </span>
              <span>
                <span className="block font-medium">{hub.city}, {hub.country}</span>
                <span className="block text-[13px] text-ink-2">Headquarters</span>
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {regions.map((r) => (
                <div key={r}>
                  <p className="mb-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-ink-3">{r}</p>
                  <ul className="flex flex-wrap gap-2">
                    {cities
                      .filter((c) => c.region === r)
                      .map((c) => (
                        <li key={c.id}>
                          <button
                            onMouseEnter={() => setActive(c.id)}
                            onMouseLeave={() => setActive(null)}
                            onFocus={() => setActive(c.id)}
                            onBlur={() => setActive(null)}
                            onClick={() => setActive((a) => (a === c.id ? null : c.id))}
                            aria-pressed={active === c.id}
                            title={c.city}
                            className={`inline-flex min-h-10 items-center rounded-full border px-4 text-[14px] font-medium transition-all duration-300 ${
                              active === c.id
                                ? 'border-accent/50 bg-brand text-white'
                                : 'border-line bg-elevated text-ink-2 hover:border-line-strong hover:text-ink'
                            }`}
                          >
                            {c.country}
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="card relative overflow-hidden px-4 py-8 sm:px-8 sm:py-10">
            <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />
            <AfricaMap labels active={active} onActivate={setActive} className="mx-auto w-full max-w-[540px]" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
