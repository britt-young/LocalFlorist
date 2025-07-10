import { Link } from "react-router-dom";
import owner from "../assets/imgs/owner.jpg";

const HomeAbout = () => {
  AOS.init();

  return (
    <div className="py-10 flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
        <div className="flex justify-start">
          <img
            src={owner}
            alt="product"
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full mt-10 lg:m-0 shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center items-end text-right">
          <h2 className="text-black mb-2">The Local Florist</h2>
          <h6 className="text-primary mb-2">
            Owner Lily James had been arranging flowers since she was a child,
            learning from her grandmother, who kept a garden bursting with
            color. Every weekend in the spring and summer, they’d gather fresh blooms and craft tiny arrangements
            for their neighbors and family
          </h6>
          <h6 className="text-primary mt-2">
            When her grandmother passed, Lily decided to honor her memory by
            pursuing her passion for floristry. In 2020,
            she opened The Local Florist—a tribute to her roots and a place
            where she could bring joy to others, one bouquet at a time
          </h6>
          <Link
            to="/about"
            className="py-2 my-5 inline-block border-2 border-primary bg-primary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-tertiary hover:bg-tertiary hover:text-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
