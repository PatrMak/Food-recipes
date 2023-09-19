import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RecipeCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius="10px" width="280px">
      {children}
    </Box>
  );
};

export default RecipeCardContainer;
