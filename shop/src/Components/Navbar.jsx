import React, { useState } from "react";
import {
  RiHome2Line,
  RiInformationLine,
  RiSettings2Line,
  RiContactsLine,
  RiLoginCircleLine,
  RiUserAddLine,
} from "react-icons/ri";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 max-w-screen">
      <div className="flex items-center justify-between mx-auto">
        <div>
          <span className="text-white font-bold flex items-center">
            OnlineShop
          </span>
        </div>
        <div className="hidden md:flex">
          <span className="text-white mx-10 flex items-center">
            <RiHome2Line className="mr-1" />
            Home
          </span>
          <span className="text-white mx-10 flex items-center">
            <RiInformationLine className="mr-1" /> About
          </span>
          <span className="text-white mx-10 flex items-center">
            <RiSettings2Line className="mr-1" /> Services
          </span>
          <span className="text-white mx-10 flex items-center">
            <RiContactsLine className="mr-1" /> Contact
          </span>
          <span className="text-white mx-10 flex items-center">
            <RiLoginCircleLine className="mr-1" /> Login
          </span>
          <span className="text-white mx-10 flex items-center">
            <RiUserAddLine className="mr-1" /> Sign Up
          </span>
        </div>
        <div className="md:hidden">
          <button
            id="menuBtn"
            className="text-white"
            onClick={toggleMobileMenu}
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobileMenu"
        className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}
      >
        <span className="text-white py-2 px-4 flex items-center">
          <RiHome2Line className="mr-1" /> Home
        </span>
        <span className="text-white py-2 px-4 flex items-center">
          <RiInformationLine className="mr-1" /> About
        </span>
        <span className="text-white py-2 px-4 flex items-center">
          <RiSettings2Line className="mr-1" /> Services
        </span>
        <span className="text-white py-2 px-4 flex items-center">
          <RiContactsLine className="mr-1" /> Contact
        </span>
        <span className="text-white py-2 px-4 flex items-center">
          <RiLoginCircleLine className="mr-1" /> Login
        </span>
        <span className="text-white py-2 px-4 flex items-center">
          <RiUserAddLine className="mr-1" /> Sign Up
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
