import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
