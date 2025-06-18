import HomeBanner from "../Components/HomeBanner";
import HomeHero from "../Components/HomeHero";
import HomeProducts from "../Components/HomeProducts";
import HomeAbout from "../Components/HomeAbout";
import HomeCustom from "../Components/HomeCustom";
import HomeTestimonials from "../Components/HomeTestimonials";
import InstagramGallery from "../Components/InstagramEmbed";



import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      <HomeBanner />
      <HomeHero />
      <HomeProducts />
      <HomeAbout />
      <HomeCustom />
      <HomeTestimonials />
      <InstagramGallery />
    </div>
  );
};

export default Home;
