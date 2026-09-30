import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'link'

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[16px] font-medium transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out-expo active:scale-[0.97]'

const styles: Record<Variant, string> = {
  primary: `${base} bg-brand text-white border border-white/10 shadow-[0_10px_30px_-10px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-brand-hover hover:shadow-[0_14px_40px_-10px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.2)]`,
  secondary: `${base} border border-line-strong bg-elevated/60 text-ink backdrop-blur hover:border-accent/40 hover:bg-elevated`,
  link: 'group inline-flex min-h-11 items-center gap-1.5 text-[16px] font-medium text-ink transition-colors hover:text-accent',
}

export function Button({ to, variant = 'primary', children }: { to: string; variant?: Variant; children: ReactNode }) {
  return (
    <Link to={to} className={styles[variant]}>
      {children}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  )
}
