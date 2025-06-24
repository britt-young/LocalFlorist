import products from "../data/products.json";
import { Link } from "react-router-dom";


const HomeProducts = () => {
  const bestsellers = products.slice(0, 3); // Adjust the number to change how many products are displayed
  
  return (
    <div className="p-4 flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
      <h2 className="text-black mb-4">Our Bestsellers</h2>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        {bestsellers.map((product) => (
          <Link
            to={`/shop/${product.handle}`}
            key={product.id}
            className="transition-transform duration-700 hover:scale-105 ease-in-out"
          >
            <div className="text-start">
              <img
                className="shadow-md"
                src={product.images.edges[0]?.node.url}
                alt={product.title}
              />
              <h5 className="text-primary mt-2">{product.title}</h5>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/shop"
        className="shadow-md py-2 m-10 inline-block border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-sm font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary transition-colors duration-300"
      >
        Shop Best Sellers
      </Link>
    </div>
  );
};

export default HomeProducts;
