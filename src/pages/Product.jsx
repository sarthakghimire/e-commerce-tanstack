import React, { useState } from "react";
import { fetchProductById } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error:{error.message}</p>;
  return (
    <div className="p-4 min-h-screen">
      <img src={data.image} alt={data.title} className="h-64 object-contain" />
      <h2 className="text-xl font-bold mt-4">{data.title}</h2>
      <p className="text-gray-600 mt-2">{data.description}</p>
      <p className="text-green-600 font-bold mt-2">${data.price}</p>
      <div className="border cursor-pointer w-30 flex justify-between h-10 items-center">
        <button
          className="cursor-pointer  m-2 p-1"
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
        >
          -
        </button>
        {quantity}
        <button
          className="cursor-pointer  m-2 p-1"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="border cursor-pointer rounded-2xl p-2 my-2 mx-[-3px]"
        onClick={() => {
          if (quantity === 0) {
            toast.error("Please select at least 1 item.");
            return;
          }
          addToCart(data, quantity);
          toast.success(
            `${quantity} ${quantity === 1 ? "item" : "items"} added to cart!`
          );
        }}
      >
        Add to Cart
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Product;
