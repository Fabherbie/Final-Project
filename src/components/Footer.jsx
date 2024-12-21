import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-white">
      <div className="mx-auto px-6 container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0">
            <Link
              to="/"
              className="font-bold text-lg text-white hover:text-purple-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-bold text-lg text-white hover:text-purple-700"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="font-bold text-lg text-white hover:text-purple-700"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="font-bold text-lg text-white hover:text-purple-700"
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="font-bold text-lg text-white hover:text-purple-700"
            >
              Register
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-700"
            >
              <i className="text-2xl fa-facebook-square fab"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-700"
            >
              <i className="text-2xl fa-instagram fab"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-700"
            >
              <i className="text-2xl fa-twitter fab"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-700"
            >
              <i className="text-2xl fa-linkedin fab"></i>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sterling Academy. All rights
            reserved.
          </p>
          <p>
            24 Academy Lane, Lekki, Lagos State, Nigeria | Email:
            sterlingacademy@edu.com | Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
