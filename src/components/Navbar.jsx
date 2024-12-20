import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Main-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="top-0 left-0 z-50 fixed bg-purple-700 shadow-lg w-full text-white">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Starling Academy Logo"
            className="mr-4 h-12 logo"
          />
          <span className="font-bold text-xl">Starling Academy</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="md:flex space-x-8 hidden">
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

        {/* Enroll Button */}
        <div className="md:block hidden">
          <Link
            to="/enroll"
            className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/courses"
              className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-500 transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/enroll"
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
