import { HStack } from "@chakra-ui/react";
import MediaEdmam from "./MediaEdmam";
import MyMedia from "./MyMedia";

const Footer = () => {
  return (
    <HStack height="49px" justifyContent="space-between">
      <MediaEdmam />
      <MyMedia />
    </HStack>
  );
};

export default Footer;
