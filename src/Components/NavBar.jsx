import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
//import { ReactComponent as Logo } from "../assets/logos/logo-1.svg";
import logo from "../assets/logos/logo-1.svg";
//import cart from "../assets/icons/shop-basket.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate;

  return (
    <div className="bg-tertiary text-primary">
      <nav className="flex items-center justify-end">
        {/* Mobile menu toggle */}
        <a
          className="lg:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex justify-center items-center w-full space-x-14">
          {/* Left Links */}
          {[
            { to: "/about", label: "About" },
            { to: "/shop", label: "Shop" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 inline-block text-center"
            >
              {/* Reserve space with bold clone */}
              <span className="invisible font-bold block">{item.label}</span>
              <NavLink
                to={item.to}
                className="absolute top-0 left-0 w-full hover:font-bold"
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Logo in center */}
          <li className="text-xl font-bold">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-auto w-100" />
            </NavLink>
          </li>

          {/* Right Links */}
          {[
            { to: "/faqs", label: "FAQs" },
            { to: "/contact", label: "Contact" },
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 inline-block text-center"
            >
              <span className="invisible font-bold block">{item.label}</span>
              <NavLink
                to={item.to}
                className="absolute top-0 left-0 w-full hover:font-bold transition-all"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <img src={cart} alt="cart" className="" /> */}
        {/* look-up {replace:true} for buttons/useNavigate Hook */}
      </nav>

      
      {/* Mobile menu (will be toggled based on isMenuOpen) */}
<div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
  <ul className="flex flex-col items-center space-y-4 px-4 py-2">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/shop", label: "Shop" },
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact Us" },
    ].map(({ to, label }) => (
      <li key={to}>
        <NavLink
          to={to}
          className="font-medium hover:font-bold transition-all duration-200"
        >
          <span className="inline-block min-w-[100px] text-center">{label}</span>
        </NavLink>
      </li>
    ))}
  </ul>


        {/* Sign Up Button (Mobile) */}
        {/* <button
          className="flex justify-center w-full py-2 text-white bg-primary"
          onClick={() => navigate("/contact")}
        >
          Sign Up
        </button> */}
      </div>
    </div>
  );
};

export default NavBar;
