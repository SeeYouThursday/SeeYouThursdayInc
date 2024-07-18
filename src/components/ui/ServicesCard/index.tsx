'use client';

import { cn } from "@/util/cn";
import {
  IconBrandShopee,
  IconUxCircle,
  IconCloud,
  IconCodeCircle2,
  IconAutomation,
  IconDevicesCode,
} from "@tabler/icons-react";
import React from "react";

export function Service() {
  const features = [
    {
      title: "Fullstack Web Development",
      description:
      "We build robust, scalable web applications from the ground up, handling both frontend and backend development.",
      icon: <IconCodeCircle2 />,
    },
    {
      title: "UX/UI Design",
      description:
        "We create intuitive and visually appealing interfaces that enhance user experiences and satisfaction.",
      icon: <IconUxCircle />,
    },
    {
      title: "E-Commerce Sites",
      description:
        "We develop secure, user-friendly online stores that drive sales and provide an enjoyable shopping experience.",
      icon: <IconBrandShopee />,
    },
    {
      title: "Refactoring/Debugging Websites",
      description: "We enhance your existing codebase by optimizing performance, fixing bugs, and improving maintainability.",
      icon: <IconCloud />,
    },
    {
      title: "Responsive Web Development",
      description: "We design and develop websites that look great and function seamlessly on all devices, from desktops to mobile phones.",
      icon: <IconDevicesCode />,
    },
    {
      title: "Web performance optimization",
      description:
      "We improve your website’s speed and performance, ensuring faster load times and a smoother user experience."
      ,
      icon: <IconAutomation />,
    },
  ];
  return (
    <section>
      <div className="flex justify-center items-center text-center">
        <h2 className="text-5xl mt-20 font-bold tracking-wide text-white ">
          Our Services
        </h2>
      </div>
      <div className="flex justify-center items-center text-center">
        <p className="text-xl text-gray-500 mt-4 mb-14">
          We offer a wide range of services to help you create a beautiful,
          user-friendly website.
        </p>
      </div>
      <div className="flex justify-center items-center text-center">
      </div>
      <div className="flex justify-center items-center text-center">
      </div>
      <div className="flex justify-center items-center text">

      </div>
      
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-white dark:text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Service;