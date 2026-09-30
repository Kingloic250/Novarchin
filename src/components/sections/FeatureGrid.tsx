import { Reveal } from '../ui/Reveal'
import { SpotlightCard } from '../ui/SpotlightCard'
import { Icon } from '../ui/Icon'
import type { Item } from '../../content/site'

/** Uniform grid of icon cards, used for Why Us, industries and values. */
export function FeatureGrid({ items, cols = 3, compact = false }: { items: Item[]; cols?: 2 | 3 | 4; compact?: boolean }) {
  const grid = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' }[cols]
  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % cols) * 0.05}>
          <SpotlightCard className={`h-full ${compact ? 'p-6' : 'p-7 md:p-8'}`} tilt={!compact}>
            <div className={`orb ${compact ? 'size-11' : 'size-12'}`}>
              <Icon name={it.icon} className="size-5" />
            </div>
            <h3 className={`font-display font-semibold tracking-[-0.02em] ${compact ? 'mt-6 text-[18px]' : 'mt-8 text-[21px]'}`}>
              {it.title}
            </h3>
            {it.description && <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{it.description}</p>}
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  )
}
