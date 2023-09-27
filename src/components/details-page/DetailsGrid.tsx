import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DetailsHeader from "./DetailsHeader";
import { Recipe } from "../../hooks/useRecipes";
import DetailsIngredients from "./DetailsIngredients";
import DetailsNutrition from "./DetailsNutrition";

interface Props {
  recipe: Recipe;
}

const DetailsGrid = ({ recipe }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"detailsHeader" "detailsIngredients" "nutrition"`,
        lg: `"detailsHeader nutrition" "detailsIngredients nutrition"`,
      }}
      templateColumns={{
        base: "95vw",
        md: "80vw",
        lg: "58vw 350px",
        xl: "50vw 350px",
        "2xl": "45vw 350px",
      }}
      templateRows={{ lg: "300px " }}
      border="1px solid #F3F3F3"
      boxShadow="1px 2px 2px #CCC"
    >
      <GridItem area="detailsHeader">
        <DetailsHeader recipe={recipe} />
      </GridItem>
      <GridItem area="nutrition" borderLeft="1px solid #F3F3F3">
        <DetailsNutrition
          nutritions={recipe.digest}
          totalDaily={recipe.totalDaily}
          totalNutritients={recipe.totalNutrients}
        />
      </GridItem>
      <GridItem area="detailsIngredients">
        <DetailsIngredients recipe={recipe} />
      </GridItem>
    </Grid>
  );
};

export default DetailsGrid;
