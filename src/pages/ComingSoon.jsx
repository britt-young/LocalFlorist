import hero from "../assets/imgs/soon-hero.jpg";
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <div
      className="bg-cover bg-center h-100 flex items-center justify-center text-black"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col bg-transparent backdrop-blur-sm p-4 text-center">
        <h1 className="text-center text-white">Coming Soon</h1>
        <h3 className="text-center text-white mb-0">please be patient</h3>
        <Link
          to="/shop"
          className="py-2 inline-block border-2 border-primary bg-primary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-tertiary hover:bg-tertiary hover:text-primary"
        >
          Browse our Bouquets
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
