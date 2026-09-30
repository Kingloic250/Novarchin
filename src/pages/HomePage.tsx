import { Hero } from '../components/sections/Hero'
import { ServicesBento } from '../components/sections/ServicesBento'
import { TechMarquee } from '../components/sections/TechMarquee'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { AdvantageFlow } from '../components/sections/AdvantageFlow'
import { ProjectGrid } from '../components/sections/Projects'
import { Coverage } from '../components/sections/Coverage'
import { CTA } from '../components/sections/CTA'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollText } from '../components/ui/ScrollText'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { Icon } from '../components/ui/Icon'
import { company, industries, whyUs } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

export default function HomePage() {
  usePageTitle()
  return (
    <>
      <Hero />

      {/* Statement — inverted band */}
      <section className="invert-band relative overflow-hidden py-28 md:py-40">
        <div aria-hidden className="glow-soft right-[-10%] top-[-30%] size-[600px]" />
        <div className="container-x relative">
          <Reveal y={12}>
            <p className="eyebrow mb-8">Who we are</p>
          </Reveal>
          <ScrollText
            text={company.overview}
            className="headline max-w-5xl text-[30px] leading-[1.18] sm:text-[40px] md:text-[52px]"
          />
          <div className="mt-12">
            <Button to="/about" variant="link">More about Novarchin</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-24 md:py-32">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="What we do"
            title="Everything you need to go *digital.*"
            intro="From strategy to launch and beyond: one partner for software, AI, cloud and security."
          />
          <Button to="/services" variant="secondary">All ten services</Button>
        </div>
        <ServicesBento limit={5} />
      </section>

      {/* Tech */}
      <section className="pb-24 md:pb-32">
        <Reveal className="container-x mb-10 text-center">
          <p className="text-[14px] text-ink-3">Built with the world's most trusted technologies</p>
        </Reveal>
        <TechMarquee />
      </section>

      <Coverage />

      {/* Why us */}
      <section className="on-surface border-y border-line bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Novarchin"
            title="Built to *last.* Built to scale."
            intro="Global engineering standards, combined with a deep understanding of African markets."
          />
          <div className="mt-14 md:mt-20">
            <FeatureGrid items={whyUs} />
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow="Our advantage"
          title="From challenge to *measurable* impact."
          intro="Every engagement follows one path: understand the problem, design the right solution, prove the result."
        />
        <div className="mt-16 md:mt-24">
          <AdvantageFlow />
        </div>
      </section>

      {/* Industries — inverted band */}
      <section className="invert-band py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="Industries" title="Trusted across *sectors.*" />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {industries.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) * 0.05}>
                <div className="card group flex h-full flex-col items-start gap-5 p-5 transition-transform duration-500 ease-out-expo hover:-translate-y-1 md:p-6">
                  <div className="orb size-11">
                    <Icon name={it.icon} className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-[16px] font-semibold tracking-[-0.02em] md:text-[18px]">{it.title}</p>
                    <p className="mt-1 hidden text-[14px] text-ink-2 sm:block">{it.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="container-x py-24 md:py-32">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader align="left" eyebrow="Selected work" title="Products we've *shipped.*" />
          <Button to="/work" variant="link">View all work</Button>
        </div>
        <ProjectGrid />
      </section>

      <CTA />
    </>
  )
}
