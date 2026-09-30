import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { caseStudies, type CaseStudy } from '../../content/site'

const tones = [
  'from-[#5c0e1b] via-[#3a0911] to-[#0c0708]',
  'from-[#2a0a10] via-[#5c0e1b] to-[#8e1b30]',
  'from-[#8e1b30] via-[#5c0e1b] to-[#16090b]',
]

/** Horizontal, scroll-snapping case-study cards with arrow controls. */
export function CaseStudyCarousel() {
  const track = useRef<HTMLDivElement>(null)

  function scroll(dir: 1 | -1) {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-6 md:-mx-8 md:scroll-px-8 md:px-8"
      >
        {caseStudies.map((c, i) => (
          <article
            key={c.title}
            className="card w-[85%] shrink-0 snap-start overflow-hidden sm:w-[60%] lg:w-[44%]"
          >
            <div className={`relative h-56 bg-gradient-to-br ${tones[i % tones.length]} p-7 text-white md:h-64`}>
              <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,white_0,transparent_45%)]" />
              <p className="relative text-[13px] font-semibold uppercase tracking-[0.08em] text-white/80">{c.sector}</p>
              <h3 className="relative mt-2 max-w-sm text-[32px] font-semibold leading-tight tracking-[-0.03em]">{c.title}</h3>
            </div>
            <CaseDetails c={c} />
          </article>
        ))}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          onClick={() => scroll(-1)}
          className="grid size-11 place-items-center rounded-full border border-line bg-elevated text-ink transition hover:scale-105"
          aria-label="Previous case study"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="grid size-11 place-items-center rounded-full border border-line bg-elevated text-ink transition hover:scale-105"
          aria-label="Next case study"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}

function CaseDetails({ c }: { c: CaseStudy }) {
  const rows: [string, string][] = [
    ['Challenge', c.challenge],
    ['Solution', c.solution],
    ['Impact', c.impact],
  ]
  return (
    <dl className="grid gap-5 p-7">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="text-[13px] font-semibold text-ink-3">{k}</dt>
          <dd className="mt-1 text-[17px] text-ink-2">{v}</dd>
        </div>
      ))}
      {c.technologies.length > 0 && (
        <div>
          <dt className="text-[13px] font-semibold text-ink-3">Technologies</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {c.technologies.map((t) => (
              <span key={t} className="rounded-full bg-surface px-3 py-1 text-[13px] font-medium">{t}</span>
            ))}
          </dd>
        </div>
      )}
    </dl>
  )
}
