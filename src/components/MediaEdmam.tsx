import { HStack, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import useMedia from "../hooks/useMedia";

const MediaEdmam = () => {
  const { data } = useMedia();
  return (
    <HStack>
      <Text
        textShadow="1px 1px 0px #FFF"
        color="#666"
        margin="0"
        paddingLeft="50px"
        fontSize="12px"
      >
        FOLLOW US:
      </Text>
      {data.map((icon) => (
        <Link key={icon.id} href={icon.link} isExternal>
          <IconButton
            aria-label={icon.name}
            variant="outline"
            _hover={{ bg: "transparent" }}
            key={icon.id}
            icon={
              <Icon
                boxSize={7}
                color="#A7A7A7"
                _hover={{ color: icon.color }}
                as={icon.icon}
              />
            }
          ></IconButton>
        </Link>
      ))}
    </HStack>
  );
};

export default MediaEdmam;
