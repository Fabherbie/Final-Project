import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Main-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-700 px-6 py-4 text-white">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Starling Academy Logo"
          className="mr-4 h-12 logo"
        />
        <span className="font-bold text-xl">Starling Academy</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 text-center">
        <div className="inline-flex space-x-8">
          <Link
            to="/"
            className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Enroll Button */}
      <div>
        <Link
          to="/enroll"
          className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
        >
          Enroll Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
