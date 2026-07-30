import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BackToTop } from '@/components/BackToTop';
import { PageReveal } from '@/components/PageReveal';

export function RootLayout() {
  return (
    <div className="grain-overlay relative min-h-screen bg-sand-100 text-ink">
      <ScrollToTop />
      <PageReveal />
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
