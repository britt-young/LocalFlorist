// BACKGROUND COLOR GRADIENT REFACTORING NEEDED!!

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

const HomeBanner = () => {
  // State to manage visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle the closing of the banner
  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // If not visible, return null to remove the component

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 bg-gradient-to-r from-primary to-secondary">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-tertiary">
          <strong className="font-semibold uppercase">
            15% off all valentine's day arrangements
          </strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Now until February 13th
        </p>
        <a
          href="/shop"
          className="flex-none rounded-full bg-primary px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Shop now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={closeBanner}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
