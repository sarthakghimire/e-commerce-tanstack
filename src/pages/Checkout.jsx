import React from "react";
import { useCart } from "../context/CartContext";
const Checkout = () => {
  const { totalAmount } = useCart();

  return (
    <div className="min-h-screen">
      <p>Total: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Checkout;
