import React from "react";
import { Recipe } from "../hooks/useRecipes";
import { Image, Card, CardBody, Heading } from "@chakra-ui/react";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card size="sm" align="center">
      <Image boxSize="200px" src={recipe.images.SMALL.url}></Image>
      <CardBody>
        <Heading fontSize="14px">{recipe.label}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
