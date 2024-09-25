'use client'

import React, { useMemo } from "react";
import ShootingStars from "../ui/shooting-star";
import { StarsBackground } from "../ui/stars-background";

const pricingPlans = [
  {
    title: "Lite",
    price: 150,
    description: "Ideal for touching up your website",
    features: [
      "Web Performance",
      "Debugging",
      "Light touch-ups",
      "Responsive Design",
    ],
  },
  {
    title: "Basic",
    price: 600,
    description: "Ideal for those that already have a design template",
    features: [
      "Everything in Light",
      "E-commerce",
      "Design & Development",
    ],
    highlight: true,
    textBlack: true,
  },
  {
    title: "Pro",
    price: 800,
    description: "Ideal for those that need need a full website including design",
    features: [
      "Everything in Basic",
      "Intuitive Design",
      "Optimized SEO",
    ],
  },
];

type PricingPlanProps = {
  plan: {
    title: string;
    price: number;
    description: string;
    features: string[];
    highlight?: boolean;
    textBlack?: boolean;
  };
};

const CheckIcon = React.memo(() => (
  <svg
    className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
));

CheckIcon.displayName = 'CheckIcon';

const PricingPlan: React.FC<PricingPlanProps> = React.memo(({ plan }) => {
  const features = useMemo(() => plan.features.map((feature, idx) => (
    <li
      key={idx}
      className="flex items-start mb-2 text-sm sm:text-base"
    >
      <CheckIcon />
      <span>{feature}</span>
    </li>
  )), [plan.features]);

  return (
    <div
      className={`flex flex-col h-full p-6 overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
        ${plan.highlight ? 'bg-white border-4 border-blue-600' : 'bg-gray-800 border border-gray-700'}
        ${plan.textBlack ? 'text-gray-900' : 'text-white'}`}
    >
      <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
      <div className="mb-4">
        <span className="text-sm">starting at</span>
        <p className="text-4xl font-bold">${plan.price}</p>
      </div>
      <p className="text-sm mb-6 flex-grow">{plan.description}</p>
      <ul className="mb-6 flex-grow">
        {features}
      </ul>
    </div>
  );
});

PricingPlan.displayName = 'PricingPlan';

const Pricing = () => {
  const pricingPlanComponents = useMemo(() => 
    pricingPlans.map((plan, index) => (
      <PricingPlan key={index} plan={plan} />
    )),
  []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 bg-gradient-to-b from-sky-600/80 via-sky-300 to-sky-400/60 bg-clip-text text-transparent p-5">
            Our Pricing
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300">
            Simple, Transparent Pricing for Any Company Size
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlanComponents}
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Pricing;