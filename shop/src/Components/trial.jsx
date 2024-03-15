import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image} alt={product.name} />
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const ShoppingCart = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 max-w-md rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="mb-4 flex items-center">
            <img src={item.image} alt={item.name} className="w-10 h-10 mr-4" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
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
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$19.99",
    },
    {
      name: "Product 2",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "$29.99",
    },
    {
      name: "Product 3",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      price: "$39.99",
    },
    {
      name: "Product 4",
      image: "https://beagiver.com.ph/wp-content/uploads/2020/01/Go-Bag.jpg",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      price: "$49.99",
    },
  ];

  const addToCart = (product) => {
    // Add the product to the cart
    setCartItems([...cartItems, product]);

    // Open the cart popup
    setCartOpen(true);
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
      {cartOpen && <ShoppingCart cartItems={cartItems} onClose={toggleCart} />}
      <ProductGrid products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
