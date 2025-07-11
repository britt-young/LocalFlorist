import hero3 from '../assets/imgs/hero3.jpg';

const ShopHero = () => {
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-100 overflow-hidden bg-cover bg-[50%] bg-no-repeat" style={{ backgroundImage: `url(${hero3})` }}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/20 bg-fixed">
            <div className="flex flex-col items-center text-center justify-center h-full w-full text-tertiary">
              <div className="bg-transparent backdrop-blur-sm p-4 mx-10 lg:mx-0">
                <h1>Valentine's Day Sale Happening Now</h1>
                <h3 className="mb-4">15% off all red & pink arrangements </h3>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ShopHero;
