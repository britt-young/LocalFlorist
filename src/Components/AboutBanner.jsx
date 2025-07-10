import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative isolate flex justify-center items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 bg-linear-to-r from-primary to-secondary">
      <div className="flex lg:flex-row flex-col items-center text-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-tertiary">
          <strong className="font-semibold uppercase">
            The Local Florist Guarantee
          </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Fresh, locally sourced, and sustainably grown flower arrangements made with care
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
