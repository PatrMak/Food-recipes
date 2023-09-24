import { HStack } from "@chakra-ui/react";
import SearchInputs from "./SearchInputs";
import About from "./About";
import Logo from "./Logo";

interface Props {
  onSearch?: (searchTxt: string) => void;
  isSearch?: boolean;
}

const NavBar = ({ onSearch, isSearch = true }: Props) => {
  return (
    <HStack paddingTop="4px" paddingBottom="4px" justifyContent="space-between">
      <Logo></Logo>
      {isSearch && <SearchInputs onSearch={onSearch}></SearchInputs>}
      <About></About>
    </HStack>
  );
};

export default NavBar;
