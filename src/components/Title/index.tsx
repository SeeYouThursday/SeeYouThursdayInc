import Particles from '../ui/Particles';
import Image from 'next/image';
import FlipWordsHero from '../Flip-Words';

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen  bg-slate-900">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-b from-violet-200 via-violet-200/50 to-violet-200" />
      {/* <Particles
        className="absolute inset-0 -z-1 animate-fade-in bg-slate-900"
        quantity={200}
      /> */}
      <h1 className="z-10 text-5xl text-transparent duration-3000 bg-gradient-to-b from-violet-600/80 via-violet-400 to-rose-400/60 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text text-center poppins-light p-5">
        SeeYouThursday
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-b from-violet-200 via-violet-200/50 to-violet-200" />
      <h2 className="text-center text-violet-200 text-2xl pb-2">Web Dev + Design</h2>
      <h2 className="text-center text-violet-200 text-2xl pb-2"></h2>
        {/* <Image
        className="h-96 w-full object-cover object-top overflow-hidden relative"
        src="/heroedited.jpeg"
        width={100}
        height={100}
        quality={100}
        sizes='(10vw, 10vh)'
        alt="abstract hero image"
        /> */}
        <FlipWordsHero />
    </div>
  );
};

export default Title;
