"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          className="text-2xl font-bold mb-4 md:mb-0 cursor-pointer"
        >
          <span duration={500} className="text-blue-500 mr-2 ">
            AI Mock
          </span>
          Interview
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 transition-colors cursor-pointer"
          >
            About Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} AI Mock Interview. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
