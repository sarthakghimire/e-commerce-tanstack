import React from "react";
import { fetchProductById } from "../api/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error:{error.message}</p>;
  return (
    <div className="p-4 h-screen">
      <img src={data.image} alt={data.title} className="h-64 object-contain" />
      <h2 className="text-xl font-bold mt-4">{data.title}</h2>
      <p className="text-gray-600 mt-2">{data.description}</p>
      <p className="text-green-600 font-bold mt-2">${data.price}</p>
      <button
        className="border cursor-pointer rounded-2xl p-2 my-2 mx-[-3px]"
        onClick={() => doSomething}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
