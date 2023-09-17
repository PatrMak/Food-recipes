import useFilters, { Filters } from "../hooks/useFilters";
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

const FilterList = () => {
  const { data, isLoading, error } = useFilters();

  return (
    <VStack>
      {data.map((filter) => (
        <Menu closeOnSelect={false} key={filter.filter}>
          <MenuButton
            key={filter.filter}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            {filter.filter}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup type="radio">
              {filter.item.map((n) => (
                <MenuItemOption
                  key={n}
                  value={n}
                  onClick={() => console.log(n)}
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
