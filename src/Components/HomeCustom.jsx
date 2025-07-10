import React from "react";
import { Link } from "react-router-dom";

import custom from "../assets/imgs/custom.jpg";

const HomeCustom = () => {
  AOS.init();

  return (
    <div className="py-10 flex flex-col justify-center items-center bg-white">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
        <div className=" md:mt-0 mt-5 flex flex-col justify-center items-start text-left">
          <h2 className="text-black mb-2">Craving Creative Control?</h2>
          <h6 className="text-primary">
            We specialize in creating custom floral arrangements tailored to
            your unique style, occasion, and sentiment. Whether you're
            celebrating a milestone, expressing sympathy, or simply brightening
            someone’s day, our team will work closely with you to design the
            perfect bouquet
          </h6>
          <Link
            to="/contact"
            className="py-2 my-5 inline-block border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary"
          >
            Place an Order
          </Link>
        </div>
        <div className="flex justify-end">
          <img
            src={custom}
            alt="product"
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full mb-5 md:m-0 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCustom;
