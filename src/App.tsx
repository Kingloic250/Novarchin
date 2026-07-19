import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/hero/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';
import { Process } from '@/components/sections/Process';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { TechGrid } from '@/components/sections/TechGrid';
import { CTA } from '@/components/sections/CTA';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="grain-overlay relative min-h-screen bg-sand-100 text-ink">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Testimonials />
        <TechGrid />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
