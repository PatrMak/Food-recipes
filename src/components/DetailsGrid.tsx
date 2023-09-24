import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DetailsHeader from "./DetailsHeader";
import { Recipe } from "../hooks/useRecipes";

interface Props {
  recipe: Recipe;
}

const DetailsGrid = ({ recipe }: Props) => {
  return (
    <Grid
      templateAreas={{
        lg: `"detailsHeader nutrition" "detailsIngredients nutrition"`,
      }}
      templateColumns={{ lg: "repeat(2, 1fr)" }}
      gap={6}
      border="1px solid #F3F3F3"
      boxShadow="1px 2px 2px #CCC"
    >
      <GridItem area="detailsHeader">
        <DetailsHeader recipe={recipe} />
      </GridItem>
      <GridItem area="nutrition" bg="red">
        nutrition
      </GridItem>
      <GridItem area="detailsIngredients" bg="blue">
        ingredients
      </GridItem>
    </Grid>
  );
};

export default DetailsGrid;
