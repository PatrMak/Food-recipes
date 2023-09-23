import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import smallLogo from "../assets/small-logo.png";

const Logo = () => {
  return (
    <HStack paddingLeft="20px">
      <Image src={smallLogo}></Image>
      <Show above="sm">
        <Image paddingLeft="2px" src={logo}></Image>
      </Show>
    </HStack>
  );
};

export default Logo;
