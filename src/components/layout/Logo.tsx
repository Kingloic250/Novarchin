export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display font-semibold tracking-[-0.03em] ${className}`}>
      <svg viewBox="0 0 64 64" className="size-7" aria-hidden>
        <rect width="64" height="64" rx="16" fill="var(--brand)" />
        <rect x="0.5" y="0.5" width="63" height="63" rx="15.5" fill="none" stroke="rgba(255,255,255,0.18)" />
        <path d="M19 46V18h5l16 19V18h5v28h-5L24 27v19z" fill="#fff" />
      </svg>
      Novarchin
    </span>
  )
}
