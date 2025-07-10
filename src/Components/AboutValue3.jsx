import value3 from "../assets/imgs/value3.jpg";

const AboutValue3 = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary patternBackground">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-0 m-5 lg:m-0">
        <div className="flex justify-center">
          <img
            src={value3}
            data-aos="zoom-in"
            data-aos-duration="2000"
            alt="product"
            className="w-[450px] mb-5 lg:mb-0 drop-shadow-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col text-left bg-white/10 p-8 h-fit">
          <span className="inline-flex items-baseline mb-2">
            <h2 className="text-black">Special-care Delivery</h2>
          </span>
          <h6 className="text-primary">
            Every arrangement is treated with the special care it deserves. From
            careful handling and expert packaging to prompt, reliable delivery,
            we ensure your flowers arrive fresh and beautiful every time.
            Whether it's a local drop-off or a special shipment, our team goes
            the extra mile to deliver your blooms with love
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AboutValue3;
