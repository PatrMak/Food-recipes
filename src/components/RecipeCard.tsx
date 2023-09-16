import React from "react";
import { Recipe } from "../hooks/useRecipes";
import {
  Image,
  Card,
  CardBody,
  Heading,
  Box,
  Text,
  HStack,
  Divider,
  Center,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import { wrap } from "lodash";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  const dividerColor: string = "#D9D9D9";
  const textShadow: string = "1px 1px 0px #FFF";
  const caloriesAndIngredientsColor: string = "#7C0";
  const caloriesAndIngredientsTxtColor: string = "#666";
  const caloriesAndIngredientsFont: string = "lg";
  const caloriesAndIngredientsTxtFont: string = "md";

  return (
    <Card
      bgGradient="linear-gradient(to bottom, #ffffff 60%,#f7f7f7 100%)"
      size="sm"
      align="center"
      borderRadius={5}
      border="1px solid #E6E6E6"
    >
      <Image margin="5px" boxSize="200px" src={recipe.images.SMALL.url}></Image>
      <CardBody w="100%" textAlign="center" alignContent="center">
        <Heading padding="5px" fontSize="14px">
          {recipe.label}
        </Heading>
        <Divider margin="0" borderColor={dividerColor}></Divider>
        <HStack padding="5px" justifyContent="center">
          <>
            <Text
              textShadow={textShadow}
              color={caloriesAndIngredientsColor}
              paddingBottom="1px"
              margin="0"
              fontSize={caloriesAndIngredientsFont}
            >
              120
            </Text>
            <Text
              textShadow={textShadow}
              color={caloriesAndIngredientsTxtColor}
              paddingBottom="1px"
              margin="0"
              fontSize={caloriesAndIngredientsTxtFont}
            >
              Calories
            </Text>
          </>
          <Divider
            margin="2.5px"
            height="25px"
            orientation="vertical"
            borderColor={dividerColor}
          />
          <>
            <Text
              textShadow={textShadow}
              color={caloriesAndIngredientsColor}
              paddingBottom="1px"
              margin="0"
              fontSize={caloriesAndIngredientsFont}
            >
              1220
            </Text>
            <Text
              textShadow={textShadow}
              color={caloriesAndIngredientsTxtColor}
              paddingBottom="1px"
              margin="0"
              fontSize={caloriesAndIngredientsTxtFont}
            >
              Ingredients
            </Text>
          </>
        </HStack>
        <Divider margin="0" borderColor={dividerColor}></Divider>
      </CardBody>
      <CardFooter padding="2px" marginBottom="5px">
        <Link
          fontWeight="bold"
          fontSize={caloriesAndIngredientsFont}
          color="#999"
          textShadow={textShadow}
        >
          test
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
