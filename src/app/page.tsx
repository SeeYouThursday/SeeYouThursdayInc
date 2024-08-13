import Image from 'next/image';
import Title from '@/components/Title';
import Hero from '@/components/ui/Hero';
import Testimonials from '@/components/ui/Testimonials';
import Mission from '@/components/ui/Mission';
import { ContactModal } from '@/components/ContactForm';
import FlipCard from '@/components/ui/MeetTheTeam';
import Service from '@/components/ui/ServicesCard';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden bg-slate-900 relative">
      <Title />
      {/* <Hero /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Mission />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FlipCard />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactModal location="front" />
      </Suspense>
    </main>
  );
}
