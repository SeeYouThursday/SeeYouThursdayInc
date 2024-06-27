import React from "react";
import { InfiniteCards } from "../../InfiniteCards"; 

const testimonials = [
  {
    text: "Working with this web development team was a game-changer for our business. They transformed our outdated site into a modern, user-friendly platform that our customers love. The process was smooth, and their attention to detail was outstanding. We highly recommend their services!",
    author: "Alex Johnson",
  },
  {
    text: "I am thrilled with the new website they built for my company. The team was professional, creative, and incredibly responsive to our needs. Our online presence has significantly improved, leading to increased traffic and sales. They exceeded all our expectations!",
    author: "Maria Rodriguez",
  },
  {
    text: "Their web development expertise is unmatched. They took our vision and turned it into a stunning reality. The site is not only visually appealing but also highly functional and easy to navigate. Their ongoing support and dedication to our project were invaluable.",
    author: "John Smith",
  },
  {
    text: "From the initial consultation to the final launch, the experience was seamless. They understood our brand and created a site that perfectly represents who we are. The feedback from our clients has been overwhelmingly positive. We couldn't be happier!",
    author: "Emily Thompson",
  },
  {
    text: "Their team delivered a top-notch website on time and within budget. The level of creativity and technical skill they brought to the project was exceptional. Our new site is fast, secure, and beautifully designed. We highly recommend their web development services.",
    author: "David Lee",
  },
];

const TestimonialSection = () => {
  return (
    <div className="overflow-clip w-screen">
      <InfiniteCards items={testimonials} direction="left" speed="normal" pauseOnHover={true}  />
    </div>
  );
};

export default TestimonialSection;
