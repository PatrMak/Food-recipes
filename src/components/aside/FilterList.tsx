import useFilters from "../../hooks/useFilters";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedFilters: (filter: string, item: string) => void;
}

const FilterList = ({ onSelectedFilters }: Props) => {
  const { data, isLoading, error } = useFilters();

  return (
    <VStack paddingY={5} alignItems="flex-start" display="flex">
      {data.map((filter) => (
        <Menu closeOnSelect={false} key={filter.filter}>
          <MenuButton
            boxShadow="1px 1px 2px #CCC inset"
            bgGradient="linear-gradient(to-b, #ffffff 60%,#f7f7f7 100%)"
            w="100%"
            key={filter.filter}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            {filter.filter}
          </MenuButton>
          <MenuList minWidth="100px" w="184px">
            <MenuOptionGroup type="radio">
              {filter.item.map((n) => (
                <MenuItemOption
                  key={n}
                  value={n}
                  onClick={() => onSelectedFilters(filter.filter, n)}
                >
                  {n}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      ))}
    </VStack>
  );
};

export default FilterList;
