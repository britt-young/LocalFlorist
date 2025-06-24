import bouquet from "../assets/icons/bouquet.png";
import price from "../assets/icons/price.png";
import delivery from "../assets/icons/delivery.png";

const AboutValues = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center mx-10 my-10 lg:mx-0 lg:my-0">
      <div className="text-center">
        <h2 className="text-black mb-2">Our Values</h2>
        <h3 className="text-primary">
          We are committed to excellence, integrity, and innovation in
          everything we do.
        </h3>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 max-w-7xl"
      >
        {/* Value 1 */}
        <div className="text-center bg-tertiary px-4 pb-5 shadow-md items-center justify-center flex flex-col transition-transform duration-700 hover:scale-105 ease-in-out">
          <div className="flex m-5 w-15 h-15 bg-primary/80 rounded-full shadow-md">
            <img src={bouquet} alt="flower bouquet icon" className="w-full" />
          </div>
          <h4 className="text-primary">Fresh Florals</h4>
          <p className="text-gray-600">
            We strive for the highest quality in our products and sourcing
          </p>
        </div>
        {/* Value 2 */}
        <div className="text-center bg-tertiary px-4 pb-5 shadow-md items-center justify-center flex flex-col transition-transform duration-700 hover:scale-105 ease-in-out">
          <div className="flex m-5 w-15 h-15 bg-primary/80 rounded-full shadow-md">
            <img src={price} alt="flower bouquet icon" className="w-full" />
          </div>
          <h4 className="text-primary">Responsibly Priced</h4>
          <p className="text-gray-600">
            We uphold honesty and transparency in our pricing and shipping costs
          </p>
        </div>
        {/* Value 3 */}
        <div className="text-center bg-tertiary px-4 pb-5 shadow-md items-center justify-center flex flex-col transition-transform duration-700 hover:scale-105 ease-in-out">
          <div className="flex m-5 w-15 h-15 bg-primary/80 rounded-full shadow-md">
            <img src={delivery} alt="flower bouquet icon" className="w-full" />
          </div>
          <h4 className="text-primary">Handled with Care</h4>
          <p className="text-gray-600">
            We handle all orders as if they were our own
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
