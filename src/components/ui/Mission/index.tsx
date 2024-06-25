'use client';

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css'; 

const Mission = () => {
  return (
    <div className="text-white overflow-y-auto max-h-screen flex flex-col m-10 text-balance text-center">
      <ScrollAnimation 
        animateIn="fadeIn" 
        delay={200} 
        animateOnce={true}
      >
        <h1 className="text-6xl text-center mb-7">Our Mission</h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        delay={200} 
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
