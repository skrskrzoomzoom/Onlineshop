import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-white p-4">
      <img className="w-full h-auto" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-white text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
          {product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-white">Nike</h2>
        <p className="text-white">Check out our latest products!</p>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </Slider>
    </div>
  );
};

const ShoppingCart = ({ cartItems, onClose, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + parseFloat(item.price.replace("₱", "")), 0)
    .toFixed(2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 max-w-3xl rounded-lg shadow-xl text-black">
        {" "}
        {/* Adjust max-w-3xl to your desired width */}
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <i className="fas fa-shopping-cart mr-2"></i>
          Shopping Cart
        </h2>
        {cartItems.map((item, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 mr-4"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)} // Updated this line
              className="p-2 bg-red-500 text-white rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-4 flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">₱{totalPrice}</span>
        </div>
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-gray-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      name: "Product 1",
      image:
        "https://dynamic.zacdn.com/dVku9nBXV-K7_A8DfoDUz58Us4I=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-2849-8020503-1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "₱19.99",
    },
    {
      name: "Product 2",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "₱29.99",
    },
    {
      name: "Product 3",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "₱19.99",
    },
    {
      name: "Product 4",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      price: "₱19.99",
    },
    {
      name: "Product 5",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "₱19.99",
    },
  ];

  const addToCart = (product) => {
    // Add the product to the cart
    setCartItems([...cartItems, product]);

    // Open the cart popup
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    // Remove the item from the cart based on its index
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-md"
      >
        Cart ({cartItems.length})
      </button>
      {cartOpen && (
        <ShoppingCart
          cartItems={cartItems}
          onClose={toggleCart}
          removeFromCart={removeFromCart} // Added this line
          className="text-black"
        />
      )}
      <ProductGrid products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
