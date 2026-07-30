import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageReveal } from '@/components/PageReveal';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/sections/About';
import { CoreValues } from '@/components/sections/CoreValues';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Industries } from '@/components/sections/Industries';
import { WhyUs } from '@/components/sections/WhyUs';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Leadership } from '@/components/sections/Leadership';
import { CSR } from '@/components/sections/CSR';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="grain-overlay relative min-h-screen bg-sand-100 text-ink">
      <PageReveal />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Services />
        <Process />
        <Industries />
        <WhyUs />
        <CaseStudies />
        <Leadership />
        <CSR />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
