import { cn } from "@/lib/util/cn";
import Image from "next/image";
import React from "react"; // Add this line

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
  fact?: string;
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  fact,
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn("group h-72 w-56 [perspective:1000px]", className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt="image"
            width={500}
            height={500}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden] flex flex-col",
            self[1]
          )}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-bold text-white">{subtitle}</h1>
            <p className="mt-1 border-t border-t-gray-200 py-2 text-sm font-medium leading-normal text-gray-100">
              {description}
            </p>
          </div>
          {fact && (
            <div className="mt-4">
              <h2 className="text-md font-semibold text-yellow-300">
                Fun Fact:
              </h2>
              <p className="text-sm italic text-gray-300 mt-1">{fact}</p>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-4  left-4 text-xl text-center font-bold bg-opacity-80 text-violet-200 mt-3">
        {title}
      </div>
    </div>
  );
}
