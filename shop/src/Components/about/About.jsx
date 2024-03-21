//create a content about about page in react js and tailwind css that have content about the shop and the owner of the shop and the location of the shopping and the contact details of the shop
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">About Our Shop</h1>

      <section className="mb-8 bg-gradient-to-b from-purple-400 to-indigo-500 py-10 px-6 text-white rounded-lg shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Your Style</h2>
          <p className="text-lg mb-6">
            Step into a realm of unparalleled style and sophistication with our
            premium selection of clothing, meticulously curated to exceed your
            expectations. From timeless classics to the latest fashion trends,
            our expansive range caters to every individual's unique taste and
            preferences. Whether you're searching for formal attire to make a
            statement at a special event or seeking comfortable casual wear for
            everyday elegance, our store has it all. Embrace the joy of shopping
            as you explore our diverse collection, knowing that each garment is
            crafted with the utmost attention to detail and quality. Elevate
            your wardrobe with pieces that not only reflect your style but also
            exude confidence and grace with every step.
          </p>
          <button className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300">
            Explore Now
          </button>
        </div>
      </section>

      <section className="mb-8 bg-gray-200 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Owner's Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          :
          <div className="border p-4 rounded-md bg-white">
            <p className="text-gray-700 font-semibold">Name: </p>
            <p className="text-gray-900">John Doe</p>
          </div>
          <div className="border p-4 rounded-md bg-white">
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-900">johndoe@example.com</p>
          </div>
          <div className="border p-4 rounded-md bg-white">
            <p className="text-gray-700 font-semibold">Phone:</p>
            <p className="text-gray-900">123-456-7890</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Location</h2>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6c2.76 0 5 2.24 5 5 0 3.48-5 10-5 10S7 14.48 7 11c0-2.76 2.24-5 5-5zm0 0V4m0 2v2m0 16V11m0 0c-2.76 0-5-2.24-5-5h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.76-2.24 5-5 5z"
            />
          </svg>
          <p className="text-gray-800">
            123 Main Street, City, State, Zip Code
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
