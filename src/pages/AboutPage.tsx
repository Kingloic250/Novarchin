import { Quote, User } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Reveal } from '../components/ui/Reveal'
import { ScrollText } from '../components/ui/ScrollText'
import { Icon } from '../components/ui/Icon'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { CTA } from '../components/sections/CTA'
import { ceo, company, csr, futureVision, team, values } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

export default function AboutPage() {
  usePageTitle('About')
  const pillars = [
    { label: 'Vision', text: company.vision },
    { label: 'Mission', text: company.mission },
    { label: 'Purpose', text: company.purpose },
  ]

  return (
    <>
      <PageHero eyebrow="About Novarchin" title="Technology that solves *real* problems."
        intro="An African technology company on a mission to accelerate the continent's digital transformation."
      />

      {/* CEO message */}
      <section className="on-surface bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="card relative mx-auto max-w-5xl overflow-hidden p-8 md:p-16">
              <div aria-hidden className="glow -right-40 -top-40 size-[520px]" />
              <Quote className="relative size-10 text-accent" aria-hidden />
              <blockquote className="mt-8 space-y-6">
                {ceo.message.map((p) => (
                  <p key={p} className="relative font-serif text-[30px] italic leading-[1.2] md:text-[44px]">{p}</p>
                ))}
              </blockquote>
              <div className="relative mt-10 flex items-center gap-4">
                <Avatar name={ceo.name} photo={ceo.photo} size="size-14" />
                <div>
                  <p className="font-semibold">{ceo.name}</p>
                  <p className="text-[15px] text-ink-2">{ceo.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / Purpose */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader eyebrow="What drives us" title="One direction. *Clear* intent." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="card h-full p-8 md:p-10">
                <p className="eyebrow">{p.label}</p>
                <p className="mt-6 font-display text-[24px] font-semibold leading-snug tracking-[-0.03em]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="on-surface bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="Core values" title="What we *stand* for." />
          <div className="mt-14">
            <FeatureGrid items={values} cols={4} compact />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader eyebrow="Leadership" title="The people behind *Novarchin.*" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.role} delay={i * 0.07}>
              <figure className="group">
                <div className="card relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid size-full place-items-center bg-gradient-to-b from-surface to-elevated">
                      <User className="size-12 text-ink-3" strokeWidth={1.25} aria-hidden />
                    </div>
                  )}
                  {/* Wine wash that rises on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5c0e1b]/70 via-[#5c0e1b]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-[17px] font-semibold tracking-[-0.02em] md:text-[19px]">{m.name || 'Coming soon'}</p>
                  <p className="mt-0.5 text-[14px] text-ink-2 md:text-[15px]">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CSR */}
      <section className="invert-band py-28 md:py-40">
        <div className="container-x">
          <p className="eyebrow mb-8">Corporate social responsibility</p>
          <ScrollText text={csr} className="headline max-w-5xl text-[30px] leading-[1.2] sm:text-[40px] md:text-[48px]" />
        </div>
      </section>

      {/* Future vision */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow="Looking ahead"
          title="Where we're going *next.*"
          intro="The frontiers we are investing in to shape the next decade of African innovation."
        />
        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {futureVision.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <span className="card inline-flex items-center gap-3 rounded-full px-5 py-3 text-[17px] font-medium transition-transform duration-300 hover:-translate-y-0.5">
                <Icon name={f.icon} className="size-5 text-accent" />
                {f.title}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

function Avatar({ name, photo, size }: { name: string; photo: string; size: string }) {
  if (photo) return <img src={photo} alt={name} className={`${size} rounded-full object-cover`} />
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
  return (
    <span className={`${size} grid place-items-center rounded-full bg-brand text-[17px] font-semibold text-white`}>
      {initials}
    </span>
  )
}
