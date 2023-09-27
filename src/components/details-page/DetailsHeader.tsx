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
import { btn } from "../../data/propertyStyles";

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
      >
        <Link href={recipe.url} isExternal>
          <Button
            border={btn.border}
            bgGradient={btn.bgGradient}
            borderRadius="30px"
            _hover={{
              bgGradient: btn.hoverBgGradient,
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
