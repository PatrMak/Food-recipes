import { Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const Page = () => {
  const location = useLocation();
  return <Box>{location.state.recipe.label}</Box>;
};

export default Page;
