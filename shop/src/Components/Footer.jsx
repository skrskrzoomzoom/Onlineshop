import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"; // import para sa  icon sa react

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 border-t border-white">
      <div>
        <h1 className="w-full text-3xl font-bold text-blue-500">Rogelio.</h1>
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
          <h6 className="text-2xl font-bold text-blue-500">Sponsored</h6>
          <ul>
            <li className="py-2 hover:text-white">OnlineShop</li>
            <li className="py-2 hover:text-white">OnlineShop</li>
            <li className="py-2 hover:text-white">OnlineShop</li>
            <li className="py-2 hover:text-white">OnlineShop</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
