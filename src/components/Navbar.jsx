import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-custom-gradient bg-opacity-10 transition duration-300 sticky-header">
      <div className="bg-custom-gradient">
        <nav className="flex md:justify-between flex-col md:flex-row min-h-10 items-center container mx-auto justify-between h-16">
          <div className="logo flex items-center">
            <img src="src/images/image copy.png" alt="Logo" className="h-16 w-20 mr-2 text-4xl" />
          </div>
          <ul className="flex space-x-6 md:space-x-8 justify-center md:justify-center text-black font-serif">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold underline font-bold " : "text-black hover:underline hover:font-bold")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-black hover:underline hover:font-bold")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Men"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-black hover:underline hover:font-bold")}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Women"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-black hover:underline hover:font-bold")}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MyCart"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-black hover:underline hover:font-bold")}
              >
                My Cart
              </NavLink>
            </li>

            <li >
            <NavLink to="/LoginForm" className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "text-black hover:underline hover:font-bold")}>Dashboard</NavLink>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
