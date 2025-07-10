import support from "../assets/icons/support.png";
import message from "../assets/icons/message.png";
import store from "../assets/icons/store.png";
import { Link } from "react-router-dom";

const email = "GulfCoastWDD" + "@" + "protonmail.com";

const ContactHelp = () => {
  return (
    <div className="my-10 mx-5 lg:mx-0">
      <h2 className="text-black max-w-7xl mx-auto mb-10 text-center lg:text-start">
        How can we help?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-primary p-4 shadow-md transition-transform duration-700 hover:scale-105 ease-in-out">
          <img
            src={support}
            alt="Support Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Talk to sales</h3>
            <p className="mb-0">
              Main Office:{" "}
              <Link to="tel:15132624121" className="hover:underline">
                +1 (513) 262-4121
              </Link>
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-primary p-4 shadow-md transition-transform duration-700 hover:scale-105 ease-in-out ">
          <img
            src={message}
            alt="Message Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Message Support</h3>
            <a href={`mailto:${email}`}>
              <p className="cursor-pointer mb-0 hover:underline">{email}</p>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-primary p-4 shadow-md transition-transform duration-700 hover:scale-105 ease-in-out">
          <img
            src={store}
            alt="Store Icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <div className="w-fit text-center mx-auto">
            <h3 className="mb-0">Visit us in store</h3>
            <a
              href="https://maps.app.goo.gl/UJR5s9meuZzPYBP59"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:underline"
            >
              123 Main St., Tallahassee, FL
            </a>

            <div className="flex flex-col text-start mt-2 indent-8">
              <ul className="text-white text-sm">
                <li>Mon-Fri: 9am - 6pm</li>
                <li>Saturday: 9am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button className="flex mx-auto shadow-md py-2 m-10 border-2 border-primary bg-tertiary px-6 pb-[6px] pt-2 text-sm font-medium leading-normal text-primary hover:bg-primary hover:text-tertiary transition-colors duration-300">
        <Link to="/faqs">Visit our FAQs page</Link>
      </button>
    </div>
  );
};

export default ContactHelp;
