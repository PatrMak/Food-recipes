import {
  HStack,
  Image,
  VStack,
  Heading,
  Button,
  Link,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { Recipe } from "../../hooks/useRecipes";

export interface Props {
  recipe: Recipe;
}

const DetailsHeader = ({ recipe }: Props) => {
  return (
    <Grid
      templateAreas={{
        base: `"image" "title" "button"`,
        md: `"image title" "image button"`,
      }}
      templateColumns={{
        base: "300px",
        md: "300px ",
      }}
      templateRows={{ base: "300px", md: "150px 150px" }}
      // border="1px solid #F3F3F3"
      // boxShadow="1px 2px 2px #CCC"
      rowGap={{ base: 2, md: 0 }}
      justifyContent="center"
    >
      <GridItem area="image" justifyContent="center" display="flex">
        <Image src={recipe.images.REGULAR.url} />
      </GridItem>
      <GridItem area="title">
        <Heading padding={{ md: 5, xl: 10 }} textAlign="center" margin="0">
          {recipe.label}
        </Heading>
      </GridItem>
      <GridItem
        area="button"
        justifyContent="center"
        alignContent="center"
        display="flex"
        flexWrap="wrap"
        paddingBottom={{ base: 3, md: 0 }}
        // paddingTop={{ md: 10 }}
      >
        <Link href={recipe.url} isExternal>
          <Button
            border="1px solid #999"
            bgGradient="linear-gradient(to-b, #8fe21b 0%, #6cb30a 100%)"
            borderRadius="30px"
            _hover={{
              bgGradient: "linear-gradient(to-b, #8fe21b 100%, #6cb30a 100%)",
            }}
            color="white"
          >
            Instruction
          </Button>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default DetailsHeader;
