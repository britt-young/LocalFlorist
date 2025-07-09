import hero from "../assets/imgs/hero5.jpg";

const ContactHero = () => {
  return (
     <div
          className="bg-cover bg-center h-100 flex items-center justify-center text-black"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="flex flex-col bg-transparent backdrop-blur-sm p-4 text-center">
            <h1 className="text-center text-white">
              Contact Us
            </h1>
            {/* <h3 className="text-center text-white mb-0">
              we respond as soon as possible
            </h3> */}
          </div>
        </div>
      );
    };

export default ContactHero