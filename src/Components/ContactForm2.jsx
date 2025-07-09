import { useEffect, useState } from "react";

const ContactForm2 = ({ clientName = "default" }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success") === "true") {
      setShowSuccess(true);
      // Optionally clean up the URL after showing the alert
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);
  // form-name for scaling per client
  const formName = `contact-${clientName.toLowerCase()}`;

  return (
    <div className="max-w-full mx-auto">
      {showSuccess && (
        <div className="mb-6 p-4 text-green-800 bg-green-100 border border-green-300">
          ✅ Thank you! Your message has been sent.
        </div>
      )}
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        action="/?success=true"
        className="w-full mx-auto space-y-6 p-3 bg-tertiary shadow-lg"
      >
        {/* Netlify hidden inputs */}
        <input type="hidden" name="form-name" value={formName} />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* First & Last Name Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full p-2 bg-white"
            placeholder="First Name"
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full p-2 bg-white"
            placeholder="Last Name"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 bg-white"
            placeholder="Email Address"
          />
        </div>

        {/* Radio Buttons */}
        <fieldset className="space-y-2 text-start">
          <legend className="font-medium mb-1 text-primary">Order Type:</legend>
          <div className="flex flex-col md:flex-row md:gap-10">
            <label className="inline-flex items-center gap-2 text-black/70">
              <input
                type="radio"
                name="option"
                value="Bulk Order(s)"
                required
                className="form-radio"
              />
              <span>Bulk Order(s)</span>
            </label>
            <label className="inline-flex items-center gap-2 text-black/70">
              <input
                type="radio"
                name="option"
                value="Special Event Arrangement"
                required
                className="form-radio "
              />
              <span>Special Event Arrangement</span>
            </label>
          </div>
        </fieldset>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full p-2 bg-white "
            placeholder="Type your custom order details here"
          />
        </div>

        {/* Styled reCAPTCHA wrapper */}
        <div className="flex justify-center">
          <div
            data-netlify-recaptcha="true"
            className="bg-gray-50 p-4 w-full"
          ></div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-tertiary font-semibold px-6 py-2 rounded hover:bg-primary-dark transition w-full"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm2;
