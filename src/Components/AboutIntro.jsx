import React from "react";
import { Link } from "react-router-dom";
import owner from "../assets/imgs/owner.jpg";

const AboutIntro = () => {
  return (
    <div className="md:h-[600px] flex flex-col justify-center items-center bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-60">
        <div className='flex justify-center'>
          <img src={owner} alt="product" className="w-[509px] m-10" />
        </div>
        <div className='m-10 flex flex-col justify-center items-start'>
          <h2 className="text-black mb-5">The Local Florist</h2>
          <p className='text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <Link
            to="/about"
            className="py-2 mt-10 inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary hover:bg-primary hover:text-tertiary"
          >
            See More Best Sellers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
