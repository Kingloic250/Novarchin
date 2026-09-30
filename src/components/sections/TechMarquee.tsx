import { techStack } from '../../content/site'

const all = techStack.flatMap((c) => c.items)

/** Infinite, pausable ribbon of technologies. */
export function TechMarquee() {
  return (
    <div className="marquee overflow-hidden py-2" aria-label={`Technologies: ${all.join(', ')}`}>
      <div className="marquee-track gap-3" aria-hidden>
        {[...all, ...all].map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-line bg-elevated px-5 py-2.5 text-[15px] font-medium text-ink-2 shadow-[var(--shadow-sm)]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechStackGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map((c) => (
        <div key={c.category} className="card p-7">
          <p className="text-[13px] font-semibold text-ink-3">{c.category}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.items.map((t) => (
              <li key={t} className="rounded-full bg-surface px-3.5 py-1.5 text-[15px] font-medium">
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
