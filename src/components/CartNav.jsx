import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-slate-500 bg-opacity-10 transition duration-300 sticky-header">
      <div className="bg-customColor">
        <nav className="flex md:justify-between flex-col md:flex-row min-h-10 items-center container mx-auto justify-between h-16">
          <div className="logo flex items-center">
            <img src="src/images/logo.png" alt="Logo" className="h-8 mr-2 text-xl " />
            <span className="text-white text-xl font-bold">Your Cart Page </span>
          </div>
          <ul className="flex space-x-6 md:space-x-8 justify-center md:justifycenter text-white ">
            <li>
              <Link to="/" className="text-white hover:text-purple-700">Home</Link>
            </li>
            <li>
              <Link to="/MyCart" className="text-white hover:text-purple-700">Wish List </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
