import { PageHero } from '../components/ui/PageHero'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ServicesBento } from '../components/sections/ServicesBento'
import { LifecycleStory } from '../components/sections/LifecycleStory'
import { TechMarquee, TechStackGrid } from '../components/sections/TechMarquee'
import { CTA } from '../components/sections/CTA'
import { usePageTitle } from '../hooks/usePageTitle'

export default function ServicesPage() {
  usePageTitle('Services')
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ten capabilities. *One* partner."
        intro="Secure, scalable digital products for businesses, governments, NGOs and enterprises across Africa."
      />

      <section className="container-x pb-24 md:pb-32">
        <ServicesBento linkMore />
      </section>

      <section className="border-y border-line bg-surface">
        <LifecycleStory />
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeader
            eyebrow="Technology stack"
            title="The right tools for *every* job."
            intro="Proven, enterprise-grade technologies chosen for performance, security and long-term maintainability."
          />
        </div>
        <div className="mt-14">
          <TechMarquee />
        </div>
        <div className="container-x mt-14">
          <TechStackGrid />
        </div>
      </section>

      <CTA />
    </>
  )
}
