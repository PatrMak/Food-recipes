import { Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { divider, txt } from "../../data/propertyStyles";

interface Props {
  calories: number;
  dailyPercentage: number;
  width?: string;
}

const DetailsCalories = ({ calories, dailyPercentage }: Props) => {
  return (
    <VStack w="100%">
      <Divider margin={0} w="90%" borderColor={divider.borderColor} />
      <HStack gap={20}>
        <VStack>
          <Text
            margin="0"
            fontSize={txt.fontLarge}
            color={txt.color}
            textShadow={txt.shadow}
          >
            {Math.round(calories)}
          </Text>
          <Text margin="0">Calories</Text>
        </VStack>
        <VStack>
          <Text
            margin="0"
            fontSize={txt.fontLarge}
            color={txt.color}
            textShadow={txt.shadow}
          >
            {Math.round(dailyPercentage) + "%"}
          </Text>
          <Text margin="0">Daily Value</Text>
        </VStack>
      </HStack>
      <Divider margin={0} w="90%" borderColor={divider.borderColor} />
    </VStack>
  );
};

export default DetailsCalories;
