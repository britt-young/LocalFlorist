import { Link } from "react-router-dom";
import owner from "../assets/imgs/owner.jpg";

const HomeAbout = () => {
  return (
    <div className="md:h-[600px] flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
        <div className="flex justify-start">
          <img src={owner} alt="product" className="w-[509px] mt-10 lg:m-0" />
        </div>
        <div className=" flex flex-col justify-center items-end text-right">
          <h2 className="text-black mb-5">The Local Florist</h2>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
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
