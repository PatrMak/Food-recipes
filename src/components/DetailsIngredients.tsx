import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  List,
  ListIcon,
  ListItem,
  Show,
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
    <Grid
      templateAreas={{ base: `"ingredients" "diet"`, md: `"ingredients diet"` }}
      templateColumns={{ base: "100%", md: "60% 40%" }}
      rowGap={2}
      justifyContent="center"
    >
      <GridItem
        area="ingredients"
        bgGradient="linear(to-b, #f8f8f8 0%, #ffffff 100%)"
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
          <Divider borderColor="#D9D9D9" w="90%" />
          <List>
            {recipe.ingredientLines.map((ingredient) => (
              <ListItem paddingY={2} key={ingredient}>
                <ListIcon as={GoDotFill} color="#6ACC00" /> {ingredient}
              </ListItem>
            ))}
          </List>
          <Show below="md">
            <Box height={5} w="95vw" bgColor="#FFF"></Box>
          </Show>
        </VStack>
      </GridItem>
      <GridItem area="diet" bgGradient="linear(to-b, #f8f8f8 0%, #ffffff 100%)">
        <VStack gap={0}>
          <Text
            margin="0"
            fontSize="2xl"
            color="#666"
            textShadow='1px 1px 0px #FFF"'
          >
            Diet
          </Text>
          <Divider borderColor="#D9D9D9" w="90%" />
          <List>
            {recipe.healthLabels.map((health) => (
              <ListItem paddingY={2} key={health}>
                <ListIcon as={GoDotFill} color="#6ACC00" /> {health}
              </ListItem>
            ))}
          </List>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default DetailsIngredients;

{
  /* <HStack alignItems="flex-start" gap={5} paddingX={2}>
<VStack gap={0} w={{ lg: "55%" }}>
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
</HStack> */
}
