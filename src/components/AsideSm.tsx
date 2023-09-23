import { Box, Icon, IconButton } from "@chakra-ui/react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import React, { useState } from "react";

interface Props {
  onShowFilters: (isActive: boolean) => void;
}

const AsideSm = ({ onShowFilters }: Props) => {
  const [isActive, setActive] = useState(false);

  return (
    <IconButton
      h="100vh"
      aria-label="show filters"
      justifyContent="left"
      bg="transparent"
      _hover={{ bg: "transparent" }}
      onClick={() => {
        isActive ? setActive(false) : setActive(true);
        onShowFilters(!isActive);
      }}
      icon={
        <Icon boxSize={6} as={isActive ? MdArrowBackIos : MdArrowForwardIos} />
      }
    />
  );
};

export default AsideSm;

//() => (isActive ? setActive(false) : setActive(true))
