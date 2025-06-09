import React from "react";
import { Link } from "react-router-dom";

import custom from "../assets/imgs/custom.jpg";

const HomeCustom = () => {
  return (
    <div className="md:h-[600px] flex flex-col justify-center items-center bg-white">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
        <div className=" md:mt-0 mt-5 flex flex-col justify-center items-start text-left">
          <h2 className="text-black mb-5">Craving some Creative Control?</h2>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <Link
            to="/contact"
            className="py-2 my-5 inline-block border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary"
          >
            Place an Order
          </Link>
        </div>
        <div className="flex justify-end">
          <img src={custom} alt="product" className="w-[509px] mb-5 md:m-0" />
        </div>
      </div>
    </div>
  );
};

export default HomeCustom;
