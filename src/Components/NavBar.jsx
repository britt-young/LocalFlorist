import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; //provides an active class to the link (can use for css styling)
//import { ReactComponent as Logo } from "../assets/logos/logo-1.svg"; //importing the logo
import logo from "../assets/logos/logo-1.svg";
//import cart from "../assets/icons/shop-basket.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate;

  return (
    <div className="bg-tertiary text-primary">
      <nav className="flex items-center justify-end p-4">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2"
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
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex justify-center items-center w-full space-x-14">
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          {/* Logo or brand */}
          <li className="text-xl font-bold">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-auto w-auto" />
            </NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* <img src={cart} alt="cart" className="" /> */}
        {/* look-up {replace:true} for buttons/useNavigate Hook */}
      </nav>

      {/* Mobile menu (will be toggled based on isMenuOpen) */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 px-4 py-2">
          <li>
            <NavLink to="/">Page 1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">Page 2</NavLink>
          </li>
          <li>
            <NavLink to="/page3">Page 3</NavLink>
          </li>
          <li>
            <NavLink to="/page4">Page 4</NavLink>
          </li>
          <li>
            <NavLink to="/page5">Page 5</NavLink>
          </li>
        </ul>

        {/* Sign Up Button (Mobile) */}
        <button
          className="flex justify-center w-full py-2 text-white bg-primary"
          onClick={() => navigate("/page5")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
