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

// <IconButton
// aria-label="pinterest"
// variant="outline"
// _hover={{ bg: "transparent" }}
// icon={
//   <Icon boxSize={7} _hover={{ color: "red.600" }} as={BsPinterest} />
// }
// />
