import { HStack } from "@chakra-ui/react";
import SearchInputs from "./SearchInputs";
import About from "./About";
import Logo from "./Logo";

interface Props {
  onSearch: (searchTxt: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingTop="4px" paddingBottom="4px" justifyContent="space-between">
      <Logo></Logo>
      <SearchInputs onSearch={onSearch}></SearchInputs>
      <About></About>
    </HStack>
  );
};

export default NavBar;
