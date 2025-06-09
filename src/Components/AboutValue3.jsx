import value3 from "../assets/imgs/value3.jpg";
import delivery from "../assets/icons/delivery.png";

const AboutValue3 = () => {
  return (
    <div className="md:h-[500px] flex flex-col justify-center items-center bg-secondary">
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 m-5 lg:m-0">
            <div className="flex justify-start">
              <img src={value3} alt="product" className="w-[450px] mb-5 lg:mb-0 shadow-lg" />
            </div>
            <div className="flex flex-col justify-center items-start text-left">
              <span class="inline-flex items-baseline">
                          <img
                            src={delivery}
                            className="mx-1 size-10 self-center rounded-full"
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
            
          </div>
        </div>
  )
}

export default AboutValue3