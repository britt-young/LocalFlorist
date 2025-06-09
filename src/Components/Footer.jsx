import React, { useState } from "react";
import emailjs from '@emailjs/browser';
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
      <div className="max-w-7xl mx-auto px-6 md:flex justify-between gap-40">
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-black">Custom Orders</h2>
          <h3 className="text-black/50 mb-10">Send us a custom order request</h3>
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
            <FaPhoneAlt className='text-black' />
            <p className='text-black'>(123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className='text-black' />
            <p className='text-black'>info@example.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className='text-black' />
            <p className='text-black'>123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
