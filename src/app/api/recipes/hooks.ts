"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "./queryFn";

export const useRecipesQuery = () => {
  return useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes });
};
