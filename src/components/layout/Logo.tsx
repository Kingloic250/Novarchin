/**
 * Novarchin mark + wordmark. The mark is drawn through a CSS mask so its colour
 * follows the theme: wine on light backgrounds, soft white on dark ones.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-display font-semibold tracking-[-0.03em] ${className}`}>
      <span
        aria-hidden
        className="block h-[26px] w-[28px] bg-[var(--logo)] transition-colors duration-500"
        style={{
          WebkitMask: 'url(/logo-mark.png) center / contain no-repeat',
          mask: 'url(/logo-mark.png) center / contain no-repeat',
        }}
      />
      Novarchin
    </span>
  )
}
