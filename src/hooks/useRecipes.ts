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
  MG: {
    label: string;
    quantity: number;
    unit: string;
  };
  K: {
    label: string;
    quantity: number;
    unit: string;
  };
  FE: {
    label: string;
    quantity: number;
    unit: string;
  };
}

export interface TestNutrition {
  label: string;
  total: number;
  daily: number;
  unit: string;
  sub: [
    {
      label: string;
      total: number;
      daily: number;
      unit: string;
    }
  ];
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
  digest: TestNutrition[];
}

interface Recipes {
  recipe: Recipe;
}

const randomSearch = [
  "meal",
  "dinner",
  "fish",
  "chicken",
  "salad",
  "egg",
  "drink",
  "breakfast",
  "lunch",
  "juice",
  "pasta",
  "pizza",
  "burger",
];

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
            ? randomSearch[Math.floor(Math.random() * randomSearch.length)]
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
