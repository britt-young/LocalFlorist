import support from "../assets/icons/support.png";
import message from "../assets/icons/message.png";
import store from "../assets/icons/store.png";
import {Link} from "react-router-dom";

const ContactHelp = () => {
  return (
    <div className="my-10 mx-5 lg:mx-0">
      <h2 className="text-black max-w-7xl mx-auto mb-10 text-center lg:text-start">
        How can we help?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-primary p-4 shadow-md">
          <img
            src={support}
            alt="Support Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Talk to sales</h3>
            <p className="mb-0">
              Main Office: <Link to="tel:15132624121">+1 (513) 262-4121</Link>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-primary p-4 shadow-md">
          <img
            src={message}
            alt="Message Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Send us an email</h3>
            <p className="mb-0">info@example.com</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-primary p-4 shadow-md">
          <img
            src={store}
            alt="Store Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Visit us in store</h3>
            <p className="mb-0">Open 9am-6pm (M-F)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHelp;
