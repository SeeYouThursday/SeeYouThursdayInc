'use client';
import { cn } from '@/lib/util/cn';
import React, { useEffect, useState } from 'react';

export const InfiniteCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    text: string;
    author: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {

      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '50s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '140s');
      }
    }
  };

  return (
    <div className=" flex flex-col md:mx-auto w-screen text-center pt-10 text-white">
      <h2 className="text-5xl poppins-medium text-transparent bg-gradient-to-b from-sky-600/80 via-sky-300 to-sky-400/60 text-center text-edge-outline whitespace-nowrap bg-clip-text mt-7 mb-7">
        CLIENT TESTIMONIAL
      </h2>
      <p className="mb-4 text-xl text-white uppercase md:mb-8 md:text-sm">
        Positive Testimonials That Motivate Us
      </p>
      <div className="flex justify-center max-w-full">
        <div
          ref={containerRef}
          className={cn(
            'scroller flex relative z-20 overflow-hidden lg:max-w-7xl mt-8 mb-8 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item, idx) => (
              <li
                className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                }}
                key={idx}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.text}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.author}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCards;
