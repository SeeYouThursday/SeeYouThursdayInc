'use client';

import React from 'react';

const Mission = () => {
  return (
    <div
      className="text-white overflow-y-auto max-h-screen flex flex-col mt-10 text-balance text-center bg-slate-900"
      id="mission"
    >
      {/* <ScrollAnimation animateIn="fadeIn" delay={0.1 * 2000} animateOnce> */}
      <h2 className="text-5xl font-bold text-center mt-7 mb-7">Our Mission</h2>
      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation
        animateIn="fadeIn"
        delay={0.1 * 1000}
        animateOnce
      > */}
      <p className="-translate-x-half transform px-4 pb-6 pt-6 text-center text-base transition-transform duration-500 md:px-6 md:text-lg lg:text-xl xl:text-2xl">
        At our company, we&apos;re dedicated to crafting cutting-edge solutions
        that not only empower our users but also transform lives. Our unwavering
        mission is to harness the power of technology to create positive change
        in the world. With a commitment to excellence, we&apos;re constantly
        innovating and pushing boundaries, all while ensuring timely delivery of
        our groundbreaking solutions.
      </p>
      {/* </ScrollAnimation> */}
    </div>
  );
};

export default Mission;
