import { HStack, Icon, IconButton, Link, Text } from "@chakra-ui/react";
import useMyMedia from "../../hooks/useMyMedia";
import { txt } from "../../data/propertyStyles";

const MyMedia = () => {
  const { data } = useMyMedia();
  return (
    <HStack paddingRight="50px">
      <Text
        textShadow={txt.shadow}
        color={txt.color}
        margin="0"
        fontSize={txt.fontSmall}
      >
        FOLLOW ME:
      </Text>
      {data.map((item) => (
        <Link key={item.id} href={item.link} isExternal>
          <IconButton
            aria-label={item.name}
            variant="outline"
            _hover={{ bg: "transparent" }}
            key={item.id}
            icon={
              <Icon
                boxSize={7}
                color="#A7A7A7"
                _hover={{ color: item.color }}
                as={item.icon}
              />
            }
          ></IconButton>
        </Link>
      ))}
    </HStack>
  );
};

export default MyMedia;
