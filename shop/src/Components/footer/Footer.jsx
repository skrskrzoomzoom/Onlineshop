import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 border-t border-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-blue-500">Online Shop</h1>
        <p className="py-4 text-justify text-gray hover:text-white">
          I'm a web developer and a mobiles app developer. I'm also a gamer and
          a content creator. I'm a front-end developer. I'm a Game Designer.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <a
            className="hover:text-white"
            href="#"
            target="Rogelio Facebook"
            rel=" "
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            className="hover:text-white"
            href="#"
            target="Rpgerio Instagram"
            rel=" "
          >
            <FaInstagram size={30} />
          </a>
          <a
            className="hover:text-white"
            href="#"
            target="Rogelio Youtube"
            rel=" "
          >
            <FaYoutube size={30} />
          </a>
          <a
            className="hover:text-white"
            href="#"
            target="Rogelio Github"
            rel=" "
          >
            <FaGithubSquare size={30} />
          </a>
          <a className="hover:text-white" href="#" target="OnlineShop " rel=" ">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray hover:text-white">Sponsored</h6>
          <ul>
            <li className="py-2 text-sm text-gray hover:text-white">Bench</li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Penshoppe
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">Nike</li>
            <li className="py-2 text-sm text-gray hover:text-white">Adidas</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray hover:text-white">Services</h6>
          <ul>
            <li className="py-2 text-sm text-gray hover:text-white">
              Online Selling
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Online Management
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Online Delivery
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Online Payment
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray hover:text-white">Company</h6>
          <ul>
            <li className="py-2 text-sm text-gray hover:text-white">About</li>
            <li className="py-2 text-sm text-gray hover:text-white">Blog</li>
            <li className="py-2 text-sm text-gray hover:text-white">Jobs</li>
            <li className="py-2 text-sm text-gray hover:text-white">Press</li>
            <li className="py-2 text-sm text-gray hover:text-white">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray hover:text-white">
            Legal rights
          </h6>
          <ul>
            <li className="py-2 text-sm text-gray hover:text-white">
              Privacy Policy and Cookies
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Accessibility Statement
            </li>
            <li className="py-2 text-sm text-gray hover:text-white">
              Terms and Conditions
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray hover:text-white mt-8">
        &copy; 2024 Online Shop. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
