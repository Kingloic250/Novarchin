import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

/**
 * Card with a wine spotlight + border glow that follows the cursor,
 * and a gentle 3D tilt. Touch devices simply get the static card.
 */
export function SpotlightCard({
  children,
  className = '',
  tilt = true,
}: {
  children: ReactNode
  className?: string
  tilt?: boolean
}) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(-500)
  const my = useMotionValue(-500)
  const rx = useSpring(0, { stiffness: 160, damping: 20 })
  const ry = useSpring(0, { stiffness: 160, damping: 20 })
  const fill = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, color-mix(in srgb, var(--brand) 22%, transparent), transparent 70%)`
  const edge = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, var(--accent), transparent 70%)`

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    mx.set(x)
    my.set(y)
    if (tilt && !reduce) {
      ry.set((x / r.width - 0.5) * 5)
      rx.set(-(y / r.height - 0.5) * 5)
    }
  }

  function onLeave() {
    mx.set(-500)
    my.set(-500)
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`card group relative overflow-hidden ${className}`}
    >
      {/* Border glow: masked to a 1px ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: edge,
          padding: 1,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: fill }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}
