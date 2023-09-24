import { HStack, Image, VStack, Heading, Button, Link } from "@chakra-ui/react";
import React from "react";
import { Recipe } from "../hooks/useRecipes";

export interface Props {
  recipe: Recipe;
}

const DetailsHeader = ({ recipe }: Props) => {
  return (
    <HStack alignItems="flex-start">
      <Image src={recipe.images.REGULAR.url} />
      <VStack justifyContent="center">
        <Heading padding={10} textAlign="center">
          {recipe.label}
        </Heading>
        <Link paddingTop={10} href={recipe.url} isExternal>
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
      </VStack>
    </HStack>
  );
};

export default DetailsHeader;
