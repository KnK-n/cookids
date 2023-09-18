"use client";

import { recipesList } from "@/app/api/recipes/queryFn";

export const Recipe = () => {
  const { data: recipes } = recipesList();
  return <></>;
};
