"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wider">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            AI Mock Interview
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            About Us
          </Link>
        </div>

        {/* Action Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg font-semibold transition duration-200 shadow-lg">
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden justify-between items-center">
        <button className="text-white text-2xl" onClick={toggleMobileMenu}>
          {/* Hamburger menu icon - for mobile view */}☰
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden space-y-4 py-4 bg-black text-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
            className="hover:text-gray-400 transition-colors cursor-pointer"
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
