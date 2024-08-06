import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-black md:bg-custom-gradient bg-opacity-10 transition duration-300">
      <div className="bg-custom-gradient">
        <nav className="flex flex-col md:flex-row min-h-10 items-center container mx-auto justify-between h-16">
          <div className="flex justify-between w-full items-center px-4 md:px-0">
            <div className="logo flex items-center">
              <img src='AddToCart-Project/src/Image/centerio.png' alt="Logo" className="h-16 w-20 mr-2 text-4xl" />
            </div>
            <button
              className="text-black md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={` bg-black md:bg-custom-gradient  md:flex md:space-x-6 md:space-x-8 justify-center md:justify-center  font-serif transition-all duration-300 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline font-bold' : 'text-white md:text-black hover:underline hover:font-bold'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold' : 'text-white md:text-black hover:underline hover:font-bold'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Men"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold' : 'text-white md:text-black hover:underline hover:font-bold'
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Women"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold' : ' md:text-black text-white hover:underline hover:font-bold'
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MyCart"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold' : 'md:text-black text-white hover:underline hover:font-bold'
                }
              >
              Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/LoginForm"
                className={
                  ({ isActive }) => {
                  isActive ? 'text-blue-600 font-bold' : 'text-white md:text-black hover:underline hover:font-bold'}
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
