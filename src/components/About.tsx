import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { TbBrandVscode } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import PopUp from "./PopUp";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HiMenu size={30} color="#8E8E8E" />}
          bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)"
          _hover={{ bgGradient: "linear(to-b, #f7f7f7 0%, #e3e3e3 100%)" }}
        />
        <MenuList>
          <MenuItem
            fontWeight="semibold"
            icon={<TbBrandVscode size={30} color="#8E8E8E" />}
            onClick={onOpen}
          >
            About Project
          </MenuItem>
          <MenuItem
            fontWeight="semibold"
            icon={<BsFillPersonFill size={30} color="#8E8E8E" />}
            onClick={onOpen}
          >
            About Me
          </MenuItem>
        </MenuList>
      </Menu>
      <PopUp isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default About;

{
  /* <Box paddingRight="20px">
<IconButton
  bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)"
  _hover={{ bgGradient: "linear(to-b, #f7f7f7 0%, #e3e3e3 100%)" }}
  aria-label="nie wiem co to robi"
  icon={<HiMenu size={30} color="#8E8E8E"></HiMenu>}
/>
</Box> */
}
