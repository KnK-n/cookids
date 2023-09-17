// "use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const rakutenAPIKey = process.env.NEXT_PUBLIC_RAKUTEN_API;

export const fetchRecipes = async () => {
  const response = await axios.get(`${rakutenAPIKey}`);
  return response;
};

export const recipesList = () => {
  return useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes });
};
