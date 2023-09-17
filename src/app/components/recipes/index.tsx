"use client";

import { useRecipesQuery } from "@/app/api/recipes/hooks";

export const Recipe = () => {
  const { data: recipesList } = useRecipesQuery();
  return <></>;
};
