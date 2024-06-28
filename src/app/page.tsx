import Image from 'next/image';
import Title from '@/components/Title';
import Hero from '@/components/ui/Hero';
import Testimonials from '@/components/ui/Testimonials';
import Mission from '@/components/ui/Mission';
import Pricing from '@/components/ui/Pricing';
import { ContactModal } from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-slate-900 relative">
      <Title />
      {/* <Hero /> */}
      <Mission />
      <Testimonials />
      <Pricing />
      <ContactModal />
    </main>
  );
}
