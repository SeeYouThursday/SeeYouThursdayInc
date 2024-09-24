'use client';

import PricingComponent from "@/components/Pricing";
import { ContactModal } from "@/components/ContactForm";

function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden bg-slate-900 relative">
      <PricingComponent />
        <ContactModal location="front" />
    </main>
  );
}

export default PricingPage;
