import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { VIEW_H, VIEW_W, cities, dotsPath, hub, project, routePath } from './africa'

const vb = { x: 0, y: 0, w: VIEW_W, h: VIEW_H }

// Hand-placed label offsets so the tightly clustered cities never overlap.
const TOP = 'translate(-50%, calc(-100% - 12px))'
const BOTTOM = 'translate(-50%, 12px)'
const LEFT = 'translate(calc(-100% - 12px), -50%)'
const RIGHT = 'translate(12px, -50%)'
const LABEL_TRANSFORM: Record<string, string> = {
  rw: LEFT,
  ug: 'translate(12px, -85%)', // right, nudged up clear of the Nairobi pin
  ke: BOTTOM,
  bi: 'translate(-80%, 12px)', // below, shifted left clear of Nairobi's label
  tz: BOTTOM,
  cd: LEFT,
  ss: TOP,
  so: TOP,
  ng: RIGHT,
  gh: LEFT,
  eg: TOP,
  ma: RIGHT,
  za: RIGHT,
}

/**
 * Dotted Africa with Kigali as a glowing hub and light pulses travelling to
 * each city across the continent. `labels` adds city name tags (coverage section).
 */
export function AfricaMap({
  labels = false,
  active,
  onActivate,
  className = '',
}: {
  labels?: boolean
  active?: string | null
  onActivate?: (id: string | null) => void
  className?: string
}) {
  const reduce = useReducedMotion()
  const uid = useId().replace(/:/g, '')
  const [hx, hy] = project(hub.lonlat)
  const scale = 1

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${vb.w} / ${vb.h}` }}>
      <svg
        viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
        className="absolute inset-0 size-full overflow-visible"
        role="img"
        aria-label={`Map of Africa highlighting Novarchin's hub in ${hub.city}, ${hub.country}, connected to ${cities
          .map((c) => c.city)
          .join(', ')}`}
      >
        <defs>
          <radialGradient id={`heat-${uid}`} cx={hx} cy={hy} r={175} gradientUnits="userSpaceOnUse">
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.95 }} />
            <stop offset="0.55" style={{ stopColor: 'var(--accent)', stopOpacity: 0.35 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
          </radialGradient>
          <radialGradient id={`hub-${uid}`}>
            <stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: 0.55 }} />
            <stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Continent dots, then a warm heat overlay around the hub */}
        <path d={dotsPath} fill="none" stroke="var(--dot)" strokeWidth={5} strokeLinecap="round" />
        <path d={dotsPath} fill="none" stroke={`url(#heat-${uid})`} strokeWidth={5} strokeLinecap="round" />

        {/* Routes */}
        {cities.map((c, i) => {
          const d = routePath(c)
          const dim = active && active !== c.id
          return (
            <g key={c.id} style={{ opacity: dim ? 0.25 : 1, transition: 'opacity 0.4s ease' }}>
              <motion.path
                d={d}
                fill="none"
                stroke="var(--accent)"
                strokeOpacity={active === c.id ? 0.95 : 0.5}
                strokeWidth={1.25}
                vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
              <path
                d={d}
                pathLength={200}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={2.5}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="route-pulse"
                style={{ animationDelay: `${1.6 + i * 0.45}s`, filter: 'drop-shadow(0 0 4px var(--accent))' }}
              />
            </g>
          )
        })}

        {/* City pins */}
        {cities.map((c, i) => {
          const [x, y] = project(c.lonlat)
          const on = active === c.id
          return (
            <g
              key={c.id}
              onMouseEnter={() => onActivate?.(c.id)}
              onMouseLeave={() => onActivate?.(null)}
              style={{ cursor: onActivate ? 'pointer' : undefined }}
            >
              <circle
                cx={x}
                cy={y}
                r={7 * scale}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
                className="ping-ring"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <circle cx={x} cy={y} r={(on ? 6 : 4.5) * scale} fill="var(--accent)" stroke="var(--bg)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
              {onActivate && <circle cx={x} cy={y} r={16 * scale} fill="transparent" />}
            </g>
          )
        })}

        {/* Hub */}
        <circle cx={hx} cy={hy} r={70 * scale} fill={`url(#hub-${uid})`} className="breathe" style={{ transformOrigin: `${hx}px ${hy}px` }} />
        <circle cx={hx} cy={hy} r={12 * scale} fill="none" stroke="var(--accent)" strokeWidth={1} vectorEffect="non-scaling-stroke" className="ping-ring" />
        <circle cx={hx} cy={hy} r={7 * scale} fill="var(--accent)" stroke="var(--bg)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Crisp HTML labels; on phones only the hub and the active city show, to avoid crowding */}
      {labels &&
        [hub, ...cities].map((c) => {
          const [x, y] = project(c.lonlat)
          const isHub = c.id === hub.id
          const left = ((x - vb.x) / vb.w) * 100
          const top = ((y - vb.y) / vb.h) * 100
          return (
            <span
              key={c.id}
              className={`pointer-events-none absolute whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm transition-all duration-300 sm:text-[12px] ${
                isHub || active === c.id
                  ? 'border-accent/40 bg-brand text-white'
                  : 'hidden border-line bg-elevated/80 text-ink-2 sm:block'
              }`}
              style={{ left: `${left}%`, top: `${top}%`, transform: LABEL_TRANSFORM[c.id] ?? TOP }}
            >
              {c.city}
              {isHub && <span className="ml-1 opacity-70">· HQ</span>}
            </span>
          )
        })}
    </div>
  )
}
