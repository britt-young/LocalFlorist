import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[800px] overflow-hidden bg-[url('C:\Users\britt\develop\LocalFlorist\frontend\src\assets\imgs\hero1.jpg')] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/20 bg-fixed">
            <div className="grid grid-cols-2 h-full items-center justify-center ml-10">
              <div className="px-6 text-start text-tertiary md:px-12">
                <h1 className="mb-4 text-5xl font-bold">Handpicked Happiness</h1>
                <h3 className="mb-8 text-3xl font-bold">Professionally styled floral bouquets and arrangements</h3>
                <Link
                  to="/shop"
                  className="inline-block rounded border-2 border-tertiary-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-tertiary-50 transition duration-150 ease-in-out hover:border-tertiary-300 hover:text-tertiary-200 focus:border-tertiary-300 focus:text-tertiary-200 focus:outline-none focus:ring-0 active:border-tertiary-300 active:text-tertiary-200 dark:hover:bg-tertiary-600 dark:focus:bg-tertiary-600"
                >
                  Shop All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHero;

