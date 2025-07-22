import React from "react";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../api/fetchData";

const Home = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  if (isLoading)
    return <p className="p-4 text-gray-700">Loading Products...</p>;

  if (isError) return <p className="p-4 text-red-500">Error:{error.message}</p>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
      {data.map((prods) => (
        <ProductCard
          key={prods.id}
          id={prods.id}
          image={prods.image}
          name={prods.title}
          description={prods.description}
          price={prods.price}
        />
      ))}
    </div>
  );
};

export default Home;
