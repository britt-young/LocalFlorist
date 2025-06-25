import value3 from "../assets/imgs/value3.jpg";


const AboutValue3 = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary patternBackground">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 m-5 lg:m-0">
        <div className="flex justify-start">
          <img
            src={value3}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt="product"
            className="w-[450px] mb-5 lg:mb-0 drop-shadow-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start text-left">
          <span className="inline-flex items-baseline mb-2">
            
              <h2 className="text-black">Special-care Delivery</h2>
          </span>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutValue3;
