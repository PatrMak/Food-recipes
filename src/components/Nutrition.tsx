import { Divider, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { TotalDaily, TotalNutritients } from "../hooks/useRecipes";
import DetailsCalories from "./DetailsCalories";
import DetailsNutrition from "./DetailsNutrition";

export interface NutritionDetails {
  totalNutritients: TotalNutritients;
  totalDaily: TotalDaily;
}

const Nutrition = ({ totalNutritients, totalDaily }: NutritionDetails) => {
  return (
    <VStack>
      <Text
        margin="0"
        fontSize="2xl"
        color="#666"
        textShadow='1px 1px 0px #FFF"'
      >
        Nutritiion
      </Text>
      <DetailsCalories
        calories={totalNutritients.ENERC_KCAL.quantity}
        dailyPercentage={totalDaily.ENERC_KCAL.quantity}
      />
      <DetailsNutrition
        totalNutritients={totalNutritients}
        totalDaily={totalDaily}
      />
    </VStack>
  );
};

export default Nutrition;
