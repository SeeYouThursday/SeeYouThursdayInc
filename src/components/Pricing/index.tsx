'use client'

import React from "react";
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

const PricingPlan: React.FC<PricingPlanProps> = React.memo(({ plan }) => (
  <div
    className={`relative z-10 flex flex-col items-center w-full max-w-sm p-4 mx-auto my-2 border border-solid rounded-lg sm:my-0 sm:p-6 md:my-4 md:p-6
      lg:p-8 ${
      plan.highlight ? 'bg-white border-4 border-blue-600' : ''
    }`}
    data-rounded="rounded-lg"
    data-rounded-max="rounded-full"
  >
    <h3 className={`m-0 text-2xl font-semibold leading-tight tracking-tight border-0 border-gray-200 sm:text-3xl md:text-4xl ${plan.textBlack ? 'text-black' : 'text-white'}`}>
      {plan.title}
    </h3>
    <div className={`flex items-end mt-6 leading-7 border-0 border-gray-200 ${plan.textBlack ? 'text-black' : 'text-white'}`}>
      <p>starting at</p>
    </div>
    <div className={`flex items-end mt-6 leading-7 border-0 border-gray-200 ${plan.textBlack ? 'text-black' : 'text-white'}`}>
      <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
        ${plan.price}
      </p>
      <p className="box-border m-0 border-solid" style={{ borderImage: 'initial' }}>
        / month
      </p>
    </div>
    <p className={`mt-6 mb-5 text-base leading-normal text-left border-0 border-gray-200 ${plan.textBlack ? 'text-black' : 'text-white'}`}>
      {plan.description}
    </p>
    <ul className={`flex-1 p-0 mt-4 ml-5 leading-7 border-0 border-gray-200 ${plan.textBlack ? 'text-black' : 'text-white'}`}>
      {plan.features.map((feature, idx) => (
        <li
          key={idx}
          className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
        >
          <svg
            className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
            data-primary="blue-600"
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
          {feature}
        </li>
      ))}
    </ul>
  </div>
));

PricingPlan.displayName = 'PricingPlan';

const Pricing = () => {
  return (
    <>
      <div className="pb-24">
        <div className="flex justify-center items-center text-center mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 pb-5 sm:pb-10">Our Pricing</h2>
        </div>
        <section className="py-8 leading-7 text-white sm:py-12 md:py-16 lg:py-8">
          <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
              <h3 className="box-border m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight tracking-tight border-solid">
                Simple, Transparent Pricing
              </h3>
              <p className="box-border mt-2 text-xl text-white border-solid sm:text-2xl pt-5 pb-5">
                Pricing to fit the needs of any company size.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3 sm:grid-cols-2">
              {pricingPlans.map((plan, index) => (
                <PricingPlan key={index} plan={plan} />
              ))}
            </div>
          </div>
        </section>
          <ShootingStars />
      <StarsBackground />
        </div>
    </>
  );
};

export default Pricing;
