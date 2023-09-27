import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { btn } from "../../data/propertyStyles";

interface Props {
  onSearch?: (searchTxt: string) => void;
}

const SearchInputs = ({ onSearch }: Props) => {
  const boxShadowColor: string = "1px 1px 2px #CCC inset";
  const placeHolderTxt: string =
    useBreakpointValue({
      base: "Find recipes...",
      md: "Find the best recipes...",
      lg: " Find the best recipes from web...",
    }) ?? "Find recipes...";

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current)
          if (typeof onSearch !== "undefined") {
            onSearch(ref.current.value);
          }
      }}
    >
      <InputGroup
        w={{
          base: "200px",
          sm: "300px",
          lg: "720px",
        }}
      >
        <Input
          id="search"
          ref={ref}
          placeholder={placeHolderTxt}
          border="1px solid #BFBFBF"
          boxShadow={boxShadowColor}
          borderRadius="30px"
          bg="white"
          _focusVisible={{ boxShadow: boxShadowColor }}
          _hover={{ boxShadow: boxShadowColor }}
        ></Input>
        <InputRightElement>
          <Box width="200px">
            <Button
              border={btn.border}
              bgGradient={btn.bgGradient}
              borderLeftRadius="0px"
              borderRightRadius="30px"
              _hover={{
                bgGradient: btn.hoverBgGradient,
              }}
              children={<FaSearch size={20} color="white"></FaSearch>}
              onClick={() => {
                if (ref.current)
                  if (typeof onSearch !== "undefined") {
                    onSearch(ref.current.value);
                  }
              }}
            ></Button>
          </Box>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInputs;
