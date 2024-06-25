'use client';
import React from 'react';
import { FlipWords } from '../ui/flip-words';
import { Parallax } from 'react-scroll-parallax';

export default function FlipWordsHero() {
  const words = ['intuitive', 'dynamic', 'comprehensive', 'modern'];

  return (
    <div className="h-[30rem] flex justify-center items-center px-4 bg-image w-screen">
      <Parallax speed={-10}>
        <div className="text-2xl md:text-4xl p-4 mx-auto font-normal text-violet-100 text-center w-screen text-balance poppins-regular h-full bg-slate-700">
          Building
          <FlipWords words={words} /> <br />
          websites specializing in full-stack web development and UX design.
        </div>
      </Parallax>
    </div>
  );
}
