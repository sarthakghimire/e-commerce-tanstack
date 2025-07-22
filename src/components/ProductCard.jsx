import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, name, description, price, id }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="border m-4 p-4 w-60 h-[360px] flex flex-col justify-between items-center text-center overflow-hidden">
        <img src={image} alt="photo" className="h-32 object-contain" />
        <h2 className="font-extrabold text-xl">{name.slice(0, 20)}...</h2>
        <h3 className="text-l font-bold">{description.slice(0, 30)}...</h3>
        <h4>{price}</h4>
        <button
          className="border cursor-pointer rounded-2xl p-2 m-2"
          onClick={() => navigate(`/product/${id}`)}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
