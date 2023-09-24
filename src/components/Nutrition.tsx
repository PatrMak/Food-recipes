import { Divider, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import {
  TestNutrition,
  TotalDaily,
  TotalNutritients,
} from "../hooks/useRecipes";
import DetailsCalories from "./DetailsCalories";
import DetailsNutrition from "./DetailsNutrition";

export interface NutritionDetails {
  totalNutritients: TotalNutritients;
  totalDaily: TotalDaily;
  nutritions: TestNutrition[];
}

const Nutrition = ({
  totalNutritients,
  totalDaily,
  nutritions,
}: NutritionDetails) => {
  return (
    <VStack paddingTop={5}>
      <Text
        margin="0"
        fontSize="2xl"
        color="#666"
        textShadow='1px 1px 0px #FFF"'
      >
        Nutrition
      </Text>
      <DetailsCalories
        calories={totalNutritients.ENERC_KCAL.quantity}
        dailyPercentage={totalDaily.ENERC_KCAL.quantity}
      />
      <DetailsNutrition nutritions={nutritions} />
    </VStack>
  );
};

export default Nutrition;
