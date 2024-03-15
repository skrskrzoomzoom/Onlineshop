import React, { useState, useRef } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462191/item/goods_01_462191.jpg?width=494",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462191/item/goods_01_462191.jpg?width=494",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462191/item/goods_01_462191.jpg?width=494",
  },
  {
    id: 4,
    name: "Product 4",
    price: 30,
    image:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462191/item/goods_01_462191.jpg?width=494",
  },
];

const ProductSlider = () => {
  const [cart, setCart] = useState([]);
  const sliderRef = useRef(null);

  const addToCart = (product) => {
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    setCart([...cart, newCartItem]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollLeft;
      sliderRef.current.scrollLeft = scrollAmount - 200;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollLeft;
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      if (scrollAmount < maxScroll) {
        sliderRef.current.scrollLeft = scrollAmount + 200;
      } else {
        sliderRef.current.scrollLeft = 0;
      }
    }
  };

  return (
    <div className="flex flex-col w-full max-w-full">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:max-w-2xl mx-auto relative overflow-hidden">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 z-10 "
          >
            {"<"}
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 z-10"
          >
            {">"}
          </button>
          <div className="flex overflow-x-auto justify-start" ref={sliderRef}>
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64 p-5">
                <div className="bg-white rounded-lg shadow-md p-6 my-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full mb-2"
                  />
                  <h2 className="text-base font-semibold text-black">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-sm">${product.price}</p>
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Add
                    </button>
                    {/* Render remove button only if the item is in the cart */}
                    {cart.find((item) => item.id === product.id) && (
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-gray-100 p-4 rounded-lg text-black">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mt-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-8 h-8 mr-2 rounded"
                />
                <div className="shopcartContainer">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                {/* Add remove button for each item in the cart */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-semibold">Total Price: ${getTotalPrice()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
