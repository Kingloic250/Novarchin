import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ProjectShowcase } from '../components/sections/Projects'
import { AdvantageFlow } from '../components/sections/AdvantageFlow'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { CTA } from '../components/sections/CTA'
import { industries } from '../content/site'
import { usePageTitle } from '../hooks/usePageTitle'

export default function WorkPage() {
  usePageTitle('Work')
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Real products. *Real* impact."
        intro="Products we've designed, engineered and launched, from digital wallets to university platforms."
      />

      <section className="container-x pb-24 md:pb-32">
        <ProjectShowcase />
      </section>

      <section className="invert-band py-24 md:py-32">
        <div className="container-x">
          <SectionHeader eyebrow="Industries served" title="Deep expertise across *eight* sectors." />
          <div className="mt-14">
            <FeatureGrid items={industries} cols={4} compact />
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHeader eyebrow="How we create value" title="Every project, the same *promise.*" />
        <div className="mt-16 md:mt-24">
          <AdvantageFlow />
        </div>
      </section>

      <CTA title="Your project could be *next.*" />
    </>
  )
}
