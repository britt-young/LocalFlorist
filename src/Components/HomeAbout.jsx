import { Link } from "react-router-dom";
import owner from "../assets/imgs/owner.jpg";


const HomeAbout = () => {
  AOS.init();

  return (
    <div className="py-10 flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
        <div className="flex justify-start">
          <img src={owner} alt="product" data-aos="zoom-in"
     data-aos-duration="2000" className="w-full mt-10 lg:m-0 shadow-2xl"  />
        </div>
        <div className=" flex flex-col justify-center items-end text-right">
          <h2 className="text-black mb-2">The Local Florist</h2>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic voluptate dignissimos veritatis ratione quam et consequatur pariatur esse officia! Nisi libero possimus molestias consequatur, animi amet porro nemo. Dolorem animi ut id  culpa totam magnam autem incidunt? Porro quia nisi optio autem nobis adipisci quos repudiandae ex minima dignissimosculpa totam magnam autem incidunt? Porro quia nisi optio autem nobis adipisci quos repudiandae ex minima
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
