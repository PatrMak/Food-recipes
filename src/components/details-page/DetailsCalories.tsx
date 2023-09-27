import { Divider, HStack, VStack, Text } from "@chakra-ui/react";

interface Props {
  calories: number;
  dailyPercentage: number;
  width?: string;
}

const DetailsCalories = ({ calories, dailyPercentage }: Props) => {
  return (
    <VStack w="100%">
      <Divider margin={0} w="90%" borderColor="#D9D9D9" />
      <HStack gap={20}>
        <VStack>
          <Text
            margin="0"
            fontSize="2xl"
            color="#666"
            textShadow='1px 1px 0px #FFF"'
          >
            {Math.round(calories)}
          </Text>
          <Text margin="0">Calories</Text>
        </VStack>
        <VStack>
          <Text
            margin="0"
            fontSize="2xl"
            color="#666"
            textShadow='1px 1px 0px #FFF"'
          >
            {Math.round(dailyPercentage) + "%"}
          </Text>
          <Text margin="0">Daily Value</Text>
        </VStack>
      </HStack>
      <Divider margin={0} w="90%" borderColor="#D9D9D9" />
    </VStack>
  );
};

export default DetailsCalories;
