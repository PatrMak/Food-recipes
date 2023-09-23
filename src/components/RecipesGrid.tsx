import { SimpleGrid, Text } from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";
import RecipeCard from "./RecipeCard";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import RecipeCardContainer from "./RecipeCardContainer";
import { RecipeQuery } from "../App";

interface Props {
  selectedFilters: RecipeQuery | undefined;
  isActiveFilters: boolean;
}

const RecipesGrid = ({ selectedFilters, isActiveFilters }: Props) => {
  const { data, isLoading, error } = useRecipes(selectedFilters);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          base: 1,
          sm: isActiveFilters ? 1 : 2,
          md: isActiveFilters ? 1 : 2,
          lg: 2,
          xl: 4,
          "2xl": 5,
        }}
        spacingX={5}
        spacingY={10}
        padding="10px 0"
        justifyContent="center"
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
