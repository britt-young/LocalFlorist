import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logos/logo-2.svg";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    emailjs
      .send(
        "service_53ecpnp",
        "template_r92fjad",
        templateParams,
        "G_2EUKwm4DuLTm0pd"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="bg-tertiary text-secondary py-10">
      <div className="flex flex-col-reverse lg:flex-row max-w-5xl mx-auto px-6 md:flex justify-between gap-20 lg:gap-40">
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-black">Custom Orders</h2>
          <h3 className="text-black/50 mb-10">
            Send us a custom order request
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-1/2 p-3 bg-white border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-1/2 p-3 bg-white border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-white border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-white border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white hover:bg-primary/30 hover:cursor-pointer transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <img src={logo} alt="Logo" className="w-80 mb-4" />
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-black" />
            <p className="text-black">(123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-black" />
            <p className="text-black">info@example.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-black" />
            <p className="text-black">123 Main St, City, Country</p>
          </div>
        </div>
      </div>
      {/* Site Map Section */}
      <div class="max-w-11/12 mx-auto mt-15 lg:border-t border-primary pt-2 text-primary">
        <div class="grid grid-flow-col grid-rows-2 lg:grid-rows-1 text-center items-center justify-center gap-8">
          <div class="group">
            <a href="/" class="group-hover:font-bold">
              Home
            </a>
          </div>
          <div class="group">
            <a href="about" class="group-hover:font-bold">
              About Us
            </a>
          </div>
          <div class="group">
            <a href="shop" class="group-hover:font-bold">
              Shop All
            </a>
          </div>
          <div class="group">
            <a href="contact" class="group-hover:font-bold">
              Contact
            </a>
          </div>
          <div class="group">
            <a href="faqs" class="group-hover:font-bold">
              FAQs
            </a>
          </div>
          <div class="group">
            <a href="#" class="group-hover:font-bold">
              Shipping
            </a>
          </div>
          <div class="group">
            <a href="#" class="group-hover:font-bold">
              Terms of Use
            </a>
          </div>
          <div class="group">
            <a href="#" class="group-hover:font-bold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      {/* Sicial Media Icons */}
      <div class="flex items-center justify-center my-10 gap-4">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          class="group p-2 rounded-full bg-primary text-white hover:bg-primary/60 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12.07C22 6.55 17.52 2 12 2S2 6.55 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H8v-2.89h2.44V9.41c0-2.42 1.43-3.75 3.62-3.75 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.89h-2.24v6.99C18.34 21.19 22 17.06 22 12.07z" />
          </svg>
        </a>

        <a
          href="https://x.com"
          aria-label="X"
          class="group p-2 rounded-full bg-primary text-white hover:bg-primary/60 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 group-hover:scale-110 transition-transform"
            viewBox="0 0 1200 1227"
            fill="currentColor"
          >
            <path d="M717 576.3L1153.3 0h-104.7L678.8 489.2 330.3 0H0l458.7 653.3L0 1227h104.7l394.4-531.4L870.7 1227H1200L717 576.3zm-139.2-189.4l26.2 37.3L246 1086.5H141.7L577.8 386.9zM330.3 70.3h92.1l447.6 633.8-92.1 130.5L330.3 70.3z" />
          </svg>
        </a>

        <a
          href="https://instagram.com"
          aria-label="Instagram"
          class="group p-2 rounded-full bg-primary text-white hover:bg-primary/60 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.2.3 2.7.5.7.3 1.2.7 1.7 1.2.5.5.9 1 1.2 1.7.2.5.4 1.4.5 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.2-.5 2.7-.3.7-.7 1.2-1.2 1.7-.5.5-1 .9-1.7 1.2-.5.2-1.4.4-2.7.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.2-.3-2.7-.5a4.81 4.81 0 01-1.7-1.2 4.81 4.81 0 01-1.2-1.7c-.2-.5-.4-1.4-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.3.3-2.2.5-2.7a4.81 4.81 0 011.2-1.7A4.81 4.81 0 016.1 2.8c.5-.2 1.4-.4 2.7-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.2 0 6.8.1 5.4.2 4.3.5 3.4.9c-.9.4-1.7 1-2.4 1.7C.5 3.3 0 4.1.4 5c-.4.9-.7 2-.8 3.4C-.1 8.8 0 9.3 0 12s0 3.2.1 4.6c.1 1.4.4 2.5.8 3.4.4.9 1 1.7 1.7 2.4.7.7 1.5 1.3 2.4 1.7.9.4 2 .7 3.4.8C8.8 24.1 9.3 24 12 24s3.2 0 4.6-.1c1.4-.1 2.5-.4 3.4-.8.9-.4 1.7-1 2.4-1.7.7-.7 1.3-1.5 1.7-2.4.4-.9.7-2 .8-3.4.1-1.4.1-1.9.1-4.6s0-3.2-.1-4.6c-.1-1.4-.4-2.5-.8-3.4-.4-.9-1-1.7-1.7-2.4-.7-.7-1.5-1.3-2.4-1.7-.9-.4-2-.7-3.4-.8C15.2-.1 14.7 0 12 0z" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="18.4" cy="5.6" r="1.44" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
