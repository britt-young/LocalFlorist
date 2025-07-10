import value1 from "../assets/imgs/value1.jpg";

const AboutValue1 = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary patternBackground">
      <div className="max-w-7xl items-center grid grid-cols-1 md:grid-cols-2 gap-0 mx-5 lg:mx-0">
        <div className="lg:mt-0 mt-5 flex flex-col text-left bg-white/10 p-8 h-fit">
          <span className="inline-flex items-baseline mb-2">
            <h2 className="text-black">Farm-fresh Quality</h2>
          </span>
          <h6 className="text-primary">
            We’re proud to offer responsibly grown, farm-fresh flowers sourced
            from local and sustainable growers. We carefully select blooms that
            are not only beautiful but also ethically cultivated, supporting
            environmentally friendly practices and small farms. The result is
            fresher, longer-lasting arrangements you can feel good about sending
            or enjoying
          </h6>
        </div>
        <div className="flex justify-center">
          <img
            src={value1}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt="florist"
            className="w-[450px] mb-5 lg:m-0 drop-shadow-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutValue1;
