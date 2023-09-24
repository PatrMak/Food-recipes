import useData from "./useData";
import { RecipeQuery } from "../Pages/Home";

export interface TotalNutritients {
  ENERC_KCAL: {
    label: string;
    quantity: number;
    unit: string;
  };
  FAT: {
    label: string;
    quantity: number;
    unit: string;
  };
  CHOCDF: {
    label: string;
    quantity: number;
    unit: string;
  };
}

export interface TotalDaily {
  ENERC_KCAL: {
    quantity: number;
    unit: string;
  };
}

export interface Recipe {
  label: string;
  calories: number;
  images: {
    SMALL: {
      url: string;
    };
    REGULAR: {
      url: string;
    };
  };
  source: string;
  url: string;
  ingredientLines: string[];
  healthLabels: string[];
  totalNutrients: TotalNutritients;
  totalDaily: TotalDaily;
}

interface Recipes {
  recipe: Recipe;
}

const useRecipes = (selectedFilters: RecipeQuery | undefined) =>
  useData<Recipes>(
    "/v2",
    {
      params: {
        q:
          selectedFilters?.q === undefined &&
          selectedFilters?.diet === undefined &&
          selectedFilters?.health === undefined &&
          selectedFilters?.cuisineType === undefined &&
          selectedFilters?.mealType === undefined &&
          selectedFilters?.dishType === undefined
            ? "meal"
            : selectedFilters.q,
        diet: selectedFilters?.diet,
        health: selectedFilters?.health,
        cuisineType: selectedFilters?.cuisineType,
        mealType: selectedFilters?.mealType,

        dishType: selectedFilters?.dishType,
      },
    },
    [selectedFilters]
  );

export default useRecipes;

// selectedFilters?.mealType !== undefined ||
// selectedFilters?.q !== undefined
//   ? selectedFilters?.mealType
//   : "Dinner",
