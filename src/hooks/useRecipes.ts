import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Recipe {
  label: string;
  calories: number;
  images: {
    SMALL: {
      url: string;
    };
  };
  source: string;
  url: string;
  ingredientLines: string[];
}

interface Recipes {
  recipe: Recipe;
}

// interface FetchRecipesResponse {
//   hits: Recipes[];
// }

const useRecipes = () => useData<Recipes>("/v2");

export default useRecipes;

// const [recipes, setRecipes] = useState<Recipes[]>([]);
// const [error, setError] = useState("");
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
//   const controller = new AbortController();

//   setLoading(true);
//   apiClient
//     .get<FetchRecipesResponse>("/v2?", { signal: controller.signal })
//     .then((res) => {
//       setRecipes(res.data.hits);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     });

//   return () => controller.abort();
// }, []);
