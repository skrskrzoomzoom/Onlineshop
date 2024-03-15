import { Link } from "react-router-dom";
import { useState } from "react";
import {
  RiHome2Line,
  RiInformationLine,
  RiSettings2Line,
  RiContactsLine,
  RiLoginCircleLine,
  RiUserAddLine,
  RiProductHuntFill,
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
          <Link to="/" className="text-white font-bold flex items-center">
            OnlineShop
          </Link>
        </div>
        <div className="md:flex hidden">
          <Link to="/" className="text-white mx-10 flex items-center">
            <RiHome2Line className="mr-1" />
            Home
          </Link>
          <Link to="/about" className="text-white mx-10 flex items-center">
            <RiInformationLine className="mr-1" /> About
          </Link>
          <Link to="/services" className="text-white mx-10 flex items-center">
            <RiProductHuntFill className="mr-1" /> Product
          </Link>
          <Link to="/contact" className="text-white mx-10 flex items-center">
            <RiContactsLine className="mr-1" /> Contact
          </Link>
          <Link to="/login" className="text-white mx-10 flex items-center">
            <RiLoginCircleLine className="mr-1" /> Login
          </Link>
          <Link to="/signup" className="text-white mx-10 flex items-center">
            <RiUserAddLine className="mr-1" /> Sign Up
          </Link>
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
      {isMobileMenuOpen && (
        <div className="text-white md:hidden">
          <Link to="/" className="py-2 px-4 flex items-center">
            <RiHome2Line className="mr-1" /> Home
          </Link>
          <Link to="/about" className="py-2 px-4 flex items-center">
            <RiInformationLine className="mr-1" /> About
          </Link>
          <Link to="/services" className="py-2 px-4 flex items-center">
            <RiProductHuntFill className="mr-1" /> Product
          </Link>
          <Link to="/contact" className="py-2 px-4 flex items-center">
            <RiContactsLine className="mr-1" /> Contact
          </Link>
          <Link to="/login" className="py-2 px-4 flex items-center">
            <RiLoginCircleLine className="mr-1" /> Login
          </Link>
          <Link to="/signup" className="py-2 px-4 flex items-center">
            <RiUserAddLine className="mr-1" /> Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
