import Particles from '../ui/Particles';

const Title = () => {
  return (
    <div className="flex items-center justify-center w-screen h-96">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-slate-300 via-slate-300/50 to-slate-300" />
      <Particles
        className="absolute inset-0 -z-1 animate-fade-in bg-slate-900"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-gradient-to-r from-violet-600/80 via-violet-400 to-fuchsia-300/80 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center">
        SeeYouThursday
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-slate-300 via-slate-300/50 to-slate-300" />
    </div>
  );
};

export default Title;
