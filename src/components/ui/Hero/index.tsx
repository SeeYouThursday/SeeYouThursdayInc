import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-screen">
      <Image
        src="" // Need a HERO Image
        height={400}
        width={400}
        quality={100}
        alt="hero image"
        className="lg:h-88 relative mb-24 mt-1 w-screen"
      />
    </div>
  );
};

export default Hero;
