"use client"
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Parallax } from "react-scroll-parallax";

export default function FlipWordsHero() {
  const words = ["intuitive", "dynamic", "comprehensive", "modern"];

  return (
    <div className="h-[30rem] flex justify-center items-center px-4 bg-image w-screen">
    <Parallax
    speed={-20}>
      <div className="text-4xl mx-auto font-normal text-neutral-600 text-violet-100 text-center w-[23em] text-balance">
        Building
        <FlipWords words={words} /> <br />
        websites specializing in full-stack web development and UX design.
      </div>
      </Parallax>
    </div>
  );
}
