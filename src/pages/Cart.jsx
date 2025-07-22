import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-2">
          <p>{item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
