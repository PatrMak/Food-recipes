import { HStack, Image, Link, Show } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import smallLogo from "../../assets/small-logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Link onClick={() => navigate(-1)}>
      <HStack paddingLeft="20px">
        <Image src={smallLogo}></Image>
        <Show above="sm">
          <Image paddingLeft="2px" src={logo}></Image>
        </Show>
      </HStack>
    </Link>
  );
};

export default Logo;
