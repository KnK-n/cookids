// "use client";
import axios from "axios";

const rakutenAPI = process.env.NEXT_PUBLIC_RAKUTEN_API;

export const fetchRecipes = async () => {
  const response = await axios.get(`${rakutenAPI}`);
  return response;
};
