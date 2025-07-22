import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-500">
        <p className="text-xl font-semibold">🛒 Your cart is empty.</p>
      </div>
    );

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🛒 Your Cart
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Price: ${item.price} × {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-lg font-semibold text-green-600">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}

        <div className="text-right mt-6 text-xl font-bold text-gray-800">
          Total: ${totalAmount.toFixed(2)}
        </div>
        <button
          className="border cursor-pointer rounded-2xl p-2 m-2"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
