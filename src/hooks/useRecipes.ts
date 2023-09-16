import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchRecipesResponse {
  hits: Recipes[];
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchRecipesResponse>("/v2?", { signal: controller.signal })
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { recipes, error };
};

export default useRecipes;
