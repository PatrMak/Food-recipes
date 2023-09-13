import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Recipe {
  label: string;
  calories: number;
}

interface Recipes {
  recipe: Recipe;
}

interface FetchRecipesResponse {
  hits: Recipes[];
}

const RecipesGrid = () => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchRecipesResponse>("/xv2?")
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipes.indexOf(recipe)}>
            {recipes.indexOf(recipe)}
            {recipe.recipe.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipesGrid;
