import { HStack } from "@chakra-ui/react";
import MediaEdmam from "../media/MediaEdmam";
import MyMedia from "../media/MyMedia";

const Footer = () => {
  return (
    <HStack
      height="49px"
      justifyContent="space-between"
      bg="#E6E6E6"
      borderTop="1px solid #FFF"
    >
      <MediaEdmam />
      <MyMedia />
    </HStack>
  );
};

export default Footer;
