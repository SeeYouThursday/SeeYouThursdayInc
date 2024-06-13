import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsHero() {
  const words = ["intuitive", "dynamic", "comprehensive", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        We build
        <FlipWords words={words} /> <br />
        websites specializing in both full stack web development and UX design.
      </div>
    </div>
  );
}
