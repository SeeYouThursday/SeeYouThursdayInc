'use client';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Mission = () => {
  return (
    <div className="text-white overflow-y-auto max-h-screen flex flex-col text-balance text-center bg-slate-900">
      <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
        <h1 className="text-6xl text-center mb-7">Our Mission</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={1}
        delay={500}
        animateOnce={true}
      >
        <p>
          At our company, we&apos;re dedicated to crafting cutting-edge
          solutions that not only empower our users but also transform lives.
          Our unwavering mission is to harness the power of technology to create
          positive change in the world. With a commitment to excellence,
          we&apos;re constantly innovating and pushing boundaries, all while
          ensuring timely delivery of our groundbreaking solutions.
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default Mission;
