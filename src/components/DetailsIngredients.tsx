import {
  Box,
  Divider,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import { GoDotFill } from "react-icons/go";

interface Props {
  recipe: Recipe;
}

const DetailsIngredients = ({ recipe }: Props) => {
  return (
    <HStack
      alignItems="flex-start"
      justifyContent="center"
      gap={5}
      paddingX={2}
    >
      <VStack gap={0}>
        <Text
          margin="0"
          fontSize="2xl"
          color="#666"
          textShadow='1px 1px 0px #FFF"'
        >
          {recipe.ingredientLines.length + " Ingredients"}
        </Text>
        <Divider borderColor="#D9D9D9" />
        <List>
          {recipe.ingredientLines.map((ingredient) => (
            <ListItem paddingY={2} key={ingredient}>
              <ListIcon as={GoDotFill} color="#6ACC00" /> {ingredient}
            </ListItem>
          ))}
        </List>
      </VStack>
      <VStack gap={0}>
        <Text
          margin="0"
          fontSize="2xl"
          color="#666"
          textShadow='1px 1px 0px #FFF"'
        >
          Diet
        </Text>
        <Divider borderColor="#D9D9D9" />
        <List>
          {recipe.healthLabels.map((health) => (
            <ListItem paddingY={2} key={health}>
              <ListIcon as={GoDotFill} color="#6ACC00" /> {health}
            </ListItem>
          ))}
        </List>
      </VStack>
    </HStack>
  );
};

export default DetailsIngredients;
