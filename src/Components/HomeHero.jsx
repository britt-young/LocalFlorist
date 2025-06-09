import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[800px] overflow-hidden bg-[url('C:\Users\britt\develop\LocalFlorist\frontend\src\assets\imgs\hero1.jpg')] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/20 bg-fixed">
            <div className="flex flex-col items-center text-center justify-center h-full w-full text-tertiary">
              <div className="bg-transparent backdrop-blur-sm p-4 mx-10 lg:mx-0">
                <h1>
                  Handpicked Happiness
                </h1>
                <h3 className="mb-4">
                  Professionally styled floral bouquets and arrangements
                </h3>
                <Link
                  to="/shop"
                  className="py-2 inline-block border-2 border-primary bg-primary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-tertiary hover:bg-tertiary hover:text-primary"
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
