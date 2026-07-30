import { About } from '@/components/sections/About';
import { CoreValues } from '@/components/sections/CoreValues';
import { Leadership } from '@/components/sections/Leadership';
import { CSR } from '@/components/sections/CSR';

export function AboutPage() {
  return (
    <>
      <About />
      <CoreValues />
      <Leadership />
      <CSR />
    </>
  );
}
