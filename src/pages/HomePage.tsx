import { Hero } from '@/components/hero/Hero';
import { Clients } from '@/components/sections/Clients';
import { Stats } from '@/components/sections/Stats';

export function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats />
    </>
  );
}
