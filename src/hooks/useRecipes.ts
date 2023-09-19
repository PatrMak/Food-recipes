import useData from "./useData";
import { RecipeQuery } from "../App";

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

const useRecipes = (selectedFilters: RecipeQuery | null) =>
  useData<Recipes>(
    "/v2",
    {
      params: {
        q: selectedFilters?.q,
        diet: selectedFilters?.diet,
        health: selectedFilters?.health,
        cuisineType: selectedFilters?.cuisineType,
        mealType:
          selectedFilters?.mealType !== undefined ||
          selectedFilters?.q !== undefined
            ? selectedFilters?.mealType
            : "Dinner",
        dishType: selectedFilters?.dishType,
      },
    },
    [selectedFilters]
  );

export default useRecipes;
