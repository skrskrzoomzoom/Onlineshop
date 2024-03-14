import React from "react";
import HeaderBackground from "../assets/images/headerbackground.png"; // Import your background image

function Header() {
  return (
    <div
      className="container mx-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col justify-center items-center sm:flex-row gap-6 text-center sm:text-left relative"
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100vw", // Set maximum width to 100% of viewport width
        margin: "0 auto", // Centering the container horizontally
        minHeight: "500px", // Adjust the height of the header
      }}
    >
      <div>
        <h2 className="font-bold text-4xl text-black">OnlineShop</h2>
        <div>
          <h2 className="font-bold text-4xl mt-1 text-black gradiant-text">
            Clothing Brand
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="mt-4 text-black text-center w-64 font-bold">
            We provide the best quality clothing for you. Choose your best
            clothing from our store.
          </h5>
          <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            Show Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
