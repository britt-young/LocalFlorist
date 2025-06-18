import HomeBanner from "../Components/HomeBanner";
import HomeHero from "../Components/HomeHero";
// import HomeProducts from '../Components/HomeProducts'
import HomeAbout from "../Components/HomeAbout";
import HomeCustom from "../Components/HomeCustom";
import HomeTestimonials from "../Components/HomeTestimonials";
import InstagramGallery from "../Components/InstagramEmbed";

import { useEffect, useState } from "react";
import { shopifyClient } from "../assets/lib/shopify";
import { GET_PRODUCTS } from "../queries/getProducts";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    shopifyClient.request(GET_PRODUCTS).then((data) => {
      setProducts(data.products.edges.slice(0, 3));
    });
  }, []);

  return (
    <div>
      <HomeBanner />
      <HomeHero />
      {/* Featured Products Section */}
      <div className="p-4 flex flex-col items-center justify-center text-center max-w-7xl mx-auto">
        <h2 className="text-black mb-4">Our Bestsellers</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-0">
          {products.map(({ node }) => (
            <Link to={`/products/${node.handle}`} key={node.id}>
              <div className="p-2 text-start">
                <img className="transition-transform duration-400 hover:scale-102 ease-in-out shadow-md" src={node.images.edges[0]?.node.url} alt={node.title} />
                <h5 className="text-primary mt-2">{node.title}</h5>
                {/* <p className="text-primary">${node.variants.edges[0].node.price.amount}</p> */}
              </div>
            </Link>
          ))}
        </div>
        <Link
                to="/shop"
                className="py-2 m-10 inline-block border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary"
              >
                Shop Best Sellers
              </Link>
      </div>
      {/* <HomeProducts /> */}
      <HomeAbout />
      <HomeCustom />
      <HomeTestimonials />
      <InstagramGallery />
    </div>
  );
};

export default Home;
