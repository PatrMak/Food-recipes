import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const RecipesGrid = () => {
  const { recipes, error } = useRecipes();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={10}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipes.indexOf(recipe)} recipe={recipe.recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipesGrid;
