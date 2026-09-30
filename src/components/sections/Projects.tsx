import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../../content/site'
import { Reveal } from '../ui/Reveal'

const host = (url: string) => new URL(url).host

/** Screenshot presented inside a browser window on a glowing wine stage. */
function ProjectFrame({ p, sizes }: { p: Project; sizes: string }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.name} live site (opens in a new tab)`}
      className="group/frame relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0708] px-5 pt-10 sm:px-10 sm:pt-14"
    >
      {/* Stage lighting */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,#5c0e1b_0%,transparent_65%)] opacity-90 transition-opacity duration-700 group-hover/frame:opacity-100" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#df6179]/50 to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_50%_0%,#000,transparent_75%)]"
      />

      {/* Browser window */}
      <div className="relative translate-y-2 overflow-hidden rounded-t-xl border border-white/15 bg-[#161213] shadow-[0_-10px_60px_-10px_rgba(150,24,48,0.55)] transition-transform duration-700 ease-out-expo group-hover/frame:-translate-y-1">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-white/45">{host(p.href)}</span>
        </div>
        <div className="aspect-[1360/600] overflow-hidden">
          <img
            src={`${p.image}-1360.webp`}
            srcSet={`${p.image}-720.webp 720w, ${p.image}-1360.webp 1360w`}
            sizes={sizes}
            alt={`${p.name} dashboard screenshot`}
            width={1360}
            height={600}
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover/frame:scale-[1.03]"
          />
        </div>
      </div>

      {/* Hover cue */}
      <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover/frame:opacity-100 sm:right-6 sm:top-5">
        <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </a>
  )
}

function ProjectMeta({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <div>
      <p className="eyebrow">{p.category}</p>
      <h3 className={`mt-4 font-display font-semibold tracking-[-0.035em] ${large ? 'text-[36px] md:text-[48px]' : 'text-[28px] md:text-[32px]'}`}>
        {p.name}
      </h3>
      <p className={`mt-1 font-serif italic text-accent ${large ? 'text-[24px] md:text-[28px]' : 'text-[20px]'}`}>{p.tagline}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2 md:text-[16px]">{p.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {p.technologies.map((t) => (
          <li key={t} className="rounded-full border border-line bg-elevated px-3 py-1 text-[13px] text-ink-2">
            {t}
          </li>
        ))}
      </ul>
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-ink transition-colors hover:text-accent"
      >
        Visit live site
        <span className="text-ink-3">· {host(p.href)}</span>
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </a>
    </div>
  )
}

/** Two-up grid for the home page. */
export function ProjectGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
      {projects.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.1}>
          <article>
            <ProjectFrame p={p} sizes="(min-width: 1024px) 600px, 100vw" />
            <div className="mt-8 px-1">
              <ProjectMeta p={p} />
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}

/** Large alternating rows for the Work page. */
export function ProjectShowcase() {
  return (
    <div className="space-y-24 md:space-y-32">
      {projects.map((p, i) => (
        <article key={p.name} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
            <ProjectFrame p={p} sizes="(min-width: 1024px) 720px, 100vw" />
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="mb-6 font-mono text-[13px] text-ink-3 tabular-nums">
              {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
            <ProjectMeta p={p} large />
          </Reveal>
        </article>
      ))}
    </div>
  )
}
