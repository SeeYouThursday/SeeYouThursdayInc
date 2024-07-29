export const GetInTouch = () => {
  return <></>;
};

export const LetsConnect = ({ location }: { location?: string }) => {
  const headingStyle = `text-left text-white`;
  return (
    <div className="text-left">
      <h2
        className={
          location === 'modal'
            ? `${headingStyle} text-3xl`
            : `${headingStyle} text-xl pt-5 pb-1`
        }
      >
        Let’s connect!
      </h2>
      <h3
        className={
          location === 'modal'
            ? `${headingStyle}`
            : `${headingStyle} text-sm pt-1 pb-5 font-light`
        }
      >
        Let&apos;s align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </h3>
    </div>
  );
};
