import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import RecipeCardContainer from "./RecipeCardContainer";

const RecipesGrid = () => {
  const { data, isLoading, error } = useRecipes();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4, "2xl": 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer key={skeleton}>
              <RecipeCardSkeleton key={skeleton} />
            </RecipeCardContainer>
          ))}
        {data.map((recipe) => (
          <RecipeCardContainer key={data.indexOf(recipe)}>
            <RecipeCard key={data.indexOf(recipe)} recipe={recipe.recipe} />
          </RecipeCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default RecipesGrid;

// const { recipes, error, isLoading } = useRecipes();
// const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// if (isLoading) onLoading(true);
// else onLoading(false);

// <>
// {error && <Text>{error}</Text>}
// <SimpleGrid
//   columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4, "2xl": 5 }}
//   spacing={10}
//   padding="10px"
// >
//   {isLoading &&
//     skeletons.map((skeleton) => (
//       <RecipeCardContainer key={skeleton}>
//         <RecipeCardSkeleton key={skeleton} />
//       </RecipeCardContainer>
//     ))}
//   {recipes.map((recipe) => (
//     <RecipeCardContainer key={recipes.indexOf(recipe)}>
//       <RecipeCard key={recipes.indexOf(recipe)} recipe={recipe.recipe} />
//     </RecipeCardContainer>
//   ))}
// </SimpleGrid>
// </>
