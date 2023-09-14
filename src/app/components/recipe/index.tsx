"use client";
import { useQuery } from "@tanstack/react-query";

const fetchRecipes = async () => {
  const url =
    "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1056336942497159381";

  const res = await fetch(url);
  console.log(res);
  return res.json();
};

export const Recipe = () => {
  const recipesResult = useQuery({ queryKey: ["recipes"], queryFn: fetchRecipes });
  console.log(recipesResult.data);
  return (
    <>
      <p>TEST</p>
    </>
  );
};
