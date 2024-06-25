'use client'

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface TestimonialProps {
  testimonial: { text: string; author: string };
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-black py-4 text-white md:py-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-base md:mb-4 md:text-lg lg:text-xl xl:text-2xl">
          {testimonial.text}
        </p>
        <p className="text-sm text-white md:text-base">{testimonial.author}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Working with this web development team was a game-changer for our business. They transformed our outdated site into a modern, user-friendly platform that our customers love. The process was smooth, and their attention to detail was outstanding. We highly recommend their services!",
      author: 'Alex Johnson'
    },
    {
      text: "I am thrilled with the new website they built for my company. The team was professional, creative, and incredibly responsive to our needs. Our online presence has significantly improved, leading to increased traffic and sales. They exceeded all our expectations!",
      author: 'Maria Rodriguez'
    },
    {
      text: "Their web development expertise is unmatched. They took our vision and turned it into a stunning reality. The site is not only visually appealing but also highly functional and easy to navigate. Their ongoing support and dedication to our project were invaluable.",
      author: 'John Smith'
    },
    {
      text: "From the initial consultation to the final launch, the experience was seamless. They understood our brand and created a site that perfectly represents who we are. The feedback from our clients has been overwhelmingly positive. We couldn't be happier!",
      author: 'Emily Thompson'
    },
    {
      text: "Their team delivered a top-notch website on time and within budget. The level of creativity and technical skill they brought to the project was exceptional. Our new site is fast, secure, and beautifully designed. We highly recommend their web development services.",
      author: 'David Lee'
    }
  ];
  

  return (
    <div className="bg-black py-4 text-white md:py-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-lg font-bold md:mb-4 md:text-xl lg:text-2xl">
          CLIENT TESTIMONIAL
        </h2>
        <p className="mb-4 text-xs uppercase md:mb-8 md:text-sm">
          Positive Testimonials That Motivate Us
        </p>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          renderArrowPrev={(onClickHandler: () => void, hasPrev: boolean, label: string) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 ml-6 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 md:p-3 lg:p-4"
              >
                ❮
              </button>
            )
          }
          renderArrowNext={(onClickHandler: () => void, hasNext: boolean, label: string) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 mr-6 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75 md:p-3 lg:p-4"
              >
                ❯
              </button>
            )
          }
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
