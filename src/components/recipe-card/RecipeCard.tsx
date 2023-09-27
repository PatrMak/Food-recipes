import React from "react";
import { Recipe } from "../../hooks/useRecipes";
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
  LinkOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link as ReactRouterLink } from "react-router-dom";
import { divider, txt } from "../../data/propertyStyles";
interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  const caloriesAndIngredientsColor: string = "#7C0";
  const caloriesAndIngredientsFont: string = "lg";
  const caloriesAndIngredientsTxtFont: string = "md";
  const caloriesRounded: number = Math.round(recipe.calories);
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/details", { state: { recipe: recipe } });
  };

  return (
    <Card
      bgGradient="linear-gradient(to bottom, #ffffff 60%,#f7f7f7 100%)"
      size="sm"
      align="center"
      borderRadius="10px"
      height="400px"
      border="1px solid #E6E6E6"
    >
      <Link onClick={handlePage}>
        <Image margin="5px" boxSize="200px" src={recipe.images.SMALL.url} />
      </Link>
      <CardBody w="100%" textAlign="center" alignContent="center">
        <Link onClick={handlePage}>
          <Heading padding="5px" fontSize="xl">
            {recipe.label}
          </Heading>
          <Box position="absolute" bottom="50px">
            <Divider margin="0" borderColor={divider.borderColor}></Divider>
            <HStack padding="5px" justifyContent="center" alignSelf="end">
              <>
                <Text
                  textShadow={txt.shadow}
                  color={caloriesAndIngredientsColor}
                  paddingBottom="1px"
                  margin="0"
                  fontSize={caloriesAndIngredientsFont}
                >
                  {caloriesRounded}
                </Text>
                <Text
                  textShadow={txt.shadow}
                  color={txt.color}
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
                borderColor={divider.borderColor}
              />
              <>
                <Text
                  textShadow={txt.shadow}
                  color={caloriesAndIngredientsColor}
                  paddingBottom="1px"
                  margin="0"
                  fontSize={caloriesAndIngredientsFont}
                >
                  {recipe.ingredientLines.length}
                </Text>
                <Text
                  textShadow={txt.shadow}
                  color={txt.color}
                  paddingBottom="1px"
                  margin="0"
                  fontSize={caloriesAndIngredientsTxtFont}
                >
                  Ingredients
                </Text>
              </>
            </HStack>
            <Divider margin="0" borderColor={divider.borderColor}></Divider>
          </Box>
        </Link>
      </CardBody>

      <CardFooter padding="2px" marginBottom="5px">
        <Link
          fontWeight="bold"
          fontSize={caloriesAndIngredientsFont}
          color="#999"
          textShadow={txt.shadow}
          href={recipe.url}
        >
          {recipe.source}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
