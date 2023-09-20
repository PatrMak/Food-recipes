import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { TbBrandVscode } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import PopUp from "./PopUp";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenSecond,
    onOpen: onOpenSecond,
    onClose: onCloseSecond,
  } = useDisclosure();
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
            onClick={onOpenSecond}
          >
            About Me
          </MenuItem>
        </MenuList>
      </Menu>
      <PopUp
        isOpen={isOpen}
        onClose={onClose}
        header={<Text margin="0">About Project</Text>}
        body={
          <>
            <Text>
              The idea of created this project was to learning how to develop
              web applications using technologies such as: React, Api, Chakra
              UI, Vite, Vercel. Code was written in TypeScript with React.
            </Text>
            <Text>
              Front-end is based of Edamam website which is also where the API
              comes from, a link to the original is placed on the website.
            </Text>
          </>
        }
      />
      <PopUp
        isOpen={isOpenSecond}
        onClose={onCloseSecond}
        header={<Text margin="0">About Me</Text>}
        body={
          <>
            <Text>
              Hi my name is Patryk. I graduated with a master's degree in
              automation and robotics. I currently work as an automation
              engineer. One of part of my job is developing desktop applications
              for machines. I'm using for this .Net Framework, C# and WinForms.
            </Text>
            <Text>
              In my free time, I learn web technologies using React and
              TypeScript. I encourage you to follow my social media where you
              will find more content I create.
            </Text>
          </>
        }
      />
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
