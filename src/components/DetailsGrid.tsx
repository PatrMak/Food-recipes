import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DetailsHeader from "./DetailsHeader";
import { Recipe } from "../hooks/useRecipes";
import DetailsIngredients from "./DetailsIngredients";
import Nutrition from "./Nutrition";

interface Props {
  recipe: Recipe;
}

const DetailsGrid = ({ recipe }: Props) => {
  return (
    <Grid
      templateAreas={{
        lg: `"detailsHeader nutrition" "detailsIngredients nutrition"`,
      }}
      templateColumns={{
        lg: "58vw 350px",
        xl: "50vw 350px",
        "2xl": "45vw 350px",
      }}
      templateRows={{ lg: "300px " }}
      border="1px solid #F3F3F3"
      boxShadow="1px 2px 2px #CCC"
      rowGap={5}
    >
      <GridItem area="detailsHeader">
        <DetailsHeader recipe={recipe} />
      </GridItem>
      <GridItem area="nutrition" borderLeft="1px solid #F3F3F3">
        <Nutrition
          nutritions={recipe.digest}
          totalDaily={recipe.totalDaily}
          totalNutritients={recipe.totalNutrients}
        />
      </GridItem>
      <GridItem
        area="detailsIngredients"
        bgGradient="linear(to-b, #f8f8f8 0%, #ffffff 100%)"
      >
        <DetailsIngredients recipe={recipe} />
      </GridItem>
    </Grid>
  );
};

export default DetailsGrid;