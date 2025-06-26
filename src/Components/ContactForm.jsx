import { useState } from "react";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_EMAILJS_SERVICE_ID

const ContactForm = () => {
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
                  className="w-full py-3 bg-primary text-white hover:bg-secondary hover:cursor-pointer transition duration-300"
                >
                  Send Message
                </button>
              </form>
  )
}

export default ContactForm