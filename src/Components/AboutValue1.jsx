import value1 from "../assets/imgs/value1.jpg";
import bouquet from "../assets/icons/bouquet.png";

const AboutValue1 = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 lg:mx-0">
        <div className="lg:mt-0 mt-5 flex flex-col justify-center items-start text-left">
          <span className="inline-flex items-baseline mb-2">
            <img
              src={bouquet}
              className="me-4 size-10 self-center rounded-full"
            />
            <span>
              <h2 className="text-black">Farm-fresh Quality</h2>
            </span>
          </span>
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={value1}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt="florist"
            className="w-[450px] mb-5 lg:m-0 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutValue1;
