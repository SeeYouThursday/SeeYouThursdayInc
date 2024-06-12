import Particles from '../ui/Particles';

const Title = () => {
  return (
    <div className="flex items-center justify-center w-screen h-96">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-b from-violet-200 via-violet-200/50 to-violet-200" />
      {/* <Particles
        className="absolute inset-0 -z-1 animate-fade-in bg-slate-900"
        quantity={200}
      /> */}
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-gradient-to-b from-violet-600/80 via-violet-400 to-rose-400/60 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center poppins-light p-5">
        SeeYouThursday
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-b from-violet-200 via-violet-200/50 to-violet-200" />
    </div>
  );
};

export default Title;
