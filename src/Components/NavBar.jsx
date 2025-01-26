import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; //provides an active class to the link (can use for css styling)

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate;

  return (
    <div className="">
      <nav className="flex justify-between items-center p-4">
        {/* Logo or brand */}
        <div className="text-xl font-bold">Logo</div>

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
        <ul className="hidden lg:flex space-x-4">
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/">Page 1</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page2">Page 2</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page3">Page 3</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page4">Page 4</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page5">Page 5</NavLink>
          </li>
        </ul>
        {/* look-up {replace:true} for buttons/useNavigate Hook */}
        {/* Sign Up Button (Desktop) */}
        <button
          className="hidden lg:flex items-center justify-center p-2 m-5"
          onClick={() => navigate("/page5")}
        >
          Sign Up
        </button>
      </nav>
      {/* Mobile menu (will be toggled based on isMenuOpen) */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 px-4 py-2">
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
          className="flex items-center justify-center p-2 m-5 w-full"
          onClick={() => navigate("/page5")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
