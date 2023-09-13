import { Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";

const RecipesGrid = () => {
  const { recipes, error } = useRecipes();
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
