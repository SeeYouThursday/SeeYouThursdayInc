const RocketIcon = () => {
  return (
    <svg
      width="26"
      height="12"
      viewBox="0 0 26 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="25.5" height="12" fill="url(#pattern0_216_31)" />
      <defs>
        <pattern
          id="pattern0_216_31"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_216_31"
            transform="scale(0.0196078 0.0416667)"
          />
        </pattern>
        <image
          id="image0_216_31"
          width="51"
          height="24"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default RocketIcon;
