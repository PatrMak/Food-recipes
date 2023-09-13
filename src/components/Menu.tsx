import { Box, IconButton } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const Menu = () => {
  return (
    <Box paddingRight="20px">
      <IconButton
        bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)"
        _hover={{ bgGradient: "linear(to-b, #f7f7f7 0%, #e3e3e3 100%)" }}
        aria-label="nie wiem co to robi"
        icon={<HiMenu size={30} color="#8E8E8E"></HiMenu>}
      />
    </Box>
  );
};

export default Menu;
