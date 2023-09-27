import { Divider, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import {
  TestNutrition,
  TotalDaily,
  TotalNutritients,
} from "../../hooks/useRecipes";
import DetailsCalories from "./DetailsCalories";
import Nutrition from "./Nutrition";
import { txt } from "../../data/propertyStyles";

export interface NutritionDetails {
  totalNutritients: TotalNutritients;
  totalDaily: TotalDaily;
  nutritions: TestNutrition[];
}

const DetailsNutrition = ({
  totalNutritients,
  totalDaily,
  nutritions,
}: NutritionDetails) => {
  return (
    <VStack
      paddingTop={5}
      bgGradient={{
        base: "linear(to-b, #f8f8f8 0%, #ffffff 100%)",
        lg: "none",
      }}
    >
      <Text
        margin="0"
        fontSize={txt.fontLarge}
        color={txt.color}
        textShadow={txt.shadow}
      >
        Nutrition
      </Text>
      <DetailsCalories
        calories={totalNutritients.ENERC_KCAL.quantity}
        dailyPercentage={totalDaily.ENERC_KCAL.quantity}
      />
      <Nutrition nutritions={nutritions} />
    </VStack>
  );
};

export default DetailsNutrition;
