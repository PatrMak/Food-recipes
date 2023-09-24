import { HStack, List, ListItem, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { NutritionDetails } from "./Nutrition";
import { TestNutrition } from "../hooks/useRecipes";

interface Props {
  testNut: TestNutrition[];
}

const DetailsNutrition = ({ testNut }: Props) => {
  return (
    <List alignItems="flex-start" w="100%">
      {testNut.map((item) =>
        Object.prototype.hasOwnProperty.call(item, "sub") ? (
          <div key={item.label + "3"}>
            <HStack justifyContent="space-between" key={item.label + "1"}>
              <ListItem padding="5px 0" key={item.label}>
                {item.label}
              </ListItem>
              <ListItem key={item.total}>
                {Math.round(item.total) + item.unit}
              </ListItem>
            </HStack>
            {item.sub.map((s) => (
              <HStack justifyContent="space-between" key={s.label + "1"}>
                <ListItem key={s.label} padding="5px 5px 5px 20px">
                  {s.label}
                </ListItem>
                <ListItem key={s.total}>
                  {Math.round(s.total) + item.unit}
                </ListItem>
              </HStack>
            ))}
          </div>
        ) : (
          <HStack justifyContent="space-between" key={item.label + "2"}>
            <ListItem padding="5px 0" key={item.label}>
              {item.label}
            </ListItem>
            <ListItem key={item.total}>
              {Math.round(item.total) + item.unit}
            </ListItem>
          </HStack>
        )
      )}
    </List>
  );
};

export default DetailsNutrition;

// {(Object.keys(totalNutritients) as (keyof typeof totalNutritients)[]).map(
//     (key) =>
//       key !== String("ENERC_KCAL") &&
//       key !== String("FASAT") &&
//       key !== String("FATRN") &&
//       key !== String("FAMS") &&
//       key !== String("FAPU") &&
//       key !== String("CHOCDF.net") &&
//       key !== String("FIBTG") &&
//       key !== String("SUGAR") ? (
//         <HStack justifyContent="space-between">
//           <ListItem padding="5px 0" key={key}>
//             {totalNutritients[key].label}
//           </ListItem>

//           {/* <ListItem key={key}>
//               {Math.round(totalNutritients[key].quantity) +
//                 totalNutritients[key].unit}
//             </ListItem> */}
//           {/* <ListItem key={key}>
//             {totalDaily[key].quantity + totalDaily[key].unit}
//           </ListItem> */}
//         </HStack>
//       ) : key !== String("ENERC_KCAL") ? (
//         <HStack justifyContent="space-between">
//           <ListItem padding="5px 5px 5px 20px" key={key}>
//             {totalNutritients[key].label}
//           </ListItem>
//         </HStack>
//       ) : null
//   )}

// key !== String("ENERC_KCAL") ? (
//     <ListItem key={key}>{totalNutritients[key].label}</ListItem>
//   ) : (
//     <ListItem padding={10} key={key}>
//       {totalNutritients[key].label}
//     </ListItem>
//   )
