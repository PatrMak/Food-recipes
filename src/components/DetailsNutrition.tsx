import { List, ListItem, VStack } from "@chakra-ui/react";
import React from "react";
import { NutritionDetails } from "./Nutrition";

const DetailsNutrition = ({
  totalNutritients,
  totalDaily,
}: NutritionDetails) => {
  return (
    <List alignItems="flex-start" w="100%">
      {(Object.keys(totalNutritients) as (keyof typeof totalNutritients)[]).map(
        (key) =>
          key !== String("ENERC_KCAL") &&
          key !== String("FASAT") &&
          key !== String("FATRN") &&
          key !== String("FAMS") &&
          key !== String("FAPU") &&
          key !== String("CHOCDF.net") &&
          key !== String("FIBTG") &&
          key !== String("SUGAR") ? (
            <ListItem padding="5px 0" key={key}>
              {totalNutritients[key].label}
            </ListItem>
          ) : key !== String("ENERC_KCAL") ? (
            <ListItem padding="5px 5px 5px 20px" key={key}>
              {totalNutritients[key].label}
            </ListItem>
          ) : null
      )}
    </List>
  );
};

export default DetailsNutrition;

// key !== String("ENERC_KCAL") ? (
//     <ListItem key={key}>{totalNutritients[key].label}</ListItem>
//   ) : (
//     <ListItem padding={10} key={key}>
//       {totalNutritients[key].label}
//     </ListItem>
//   )
