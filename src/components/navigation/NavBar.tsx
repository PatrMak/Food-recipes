import { HStack } from "@chakra-ui/react";
import SearchInputs from "./SearchInputs";
import About from "../media/About";
import Logo from "../media/Logo";

interface Props {
  onSearch?: (searchTxt: string) => void;
  isSearch?: boolean;
}

const NavBar = ({ onSearch, isSearch = true }: Props) => {
  return (
    <HStack
      paddingTop="4px"
      paddingBottom="4px"
      justifyContent="space-between"
      bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)"
    >
      <Logo></Logo>
      {isSearch && <SearchInputs onSearch={onSearch}></SearchInputs>}
      <About></About>
    </HStack>
  );
};

export default NavBar;
