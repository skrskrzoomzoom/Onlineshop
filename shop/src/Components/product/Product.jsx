import { useState } from "react";
import "tailwindcss/tailwind.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image:
      "https://dynamic.zacdn.com/dVku9nBXV-K7_A8DfoDUz58Us4I=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/nike-2849-8020503-1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
];

function Services() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Calculate total price of items in cart
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-8">Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full" />
            <h2 className="text-lg font-bold my-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b py-2"
                >
                  <img src={item.image} alt={item.name} className="w-16" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total: ${total}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Services;
