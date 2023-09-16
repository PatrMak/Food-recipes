import { HStack } from "@chakra-ui/react";
import SearchInputs from "./SearchInputs";
import Menu from "./Menu";
import Logo from "./Logo";

interface Props {
  onSearch: (searchTxt: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingTop="4px" paddingBottom="4px" justifyContent="space-between">
      <Logo></Logo>
      <SearchInputs onSearch={onSearch}></SearchInputs>
      <Menu></Menu>
    </HStack>
  );
};

export default NavBar;
