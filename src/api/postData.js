import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const addProduct = async (newProduct) => {
  try {
    const response = await axios.post(BASE_URL, newProduct, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
