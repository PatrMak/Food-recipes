import { HStack, List, ListItem, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { NutritionDetails } from "./DetailsNutrition";
import { TestNutrition } from "../../hooks/useRecipes";
import NutritionName from "./NutritionName";
import NutritionTotal from "./NutritionTotal";
import NutritionDaily from "./NutritionDaily";

interface Props {
  nutritions: TestNutrition[];
}

const Nutrition = ({ nutritions }: Props) => {
  return (
    <HStack>
      <NutritionName nutritions={nutritions} />
      <>
        <NutritionTotal nutritions={nutritions} />
        <NutritionDaily nutritions={nutritions} />
      </>
    </HStack>
  );
};

export default Nutrition;

// <List alignItems="flex-start" w="100%">
// {testNut.map((item) =>
//   Object.prototype.hasOwnProperty.call(item, "sub") ? (
//     <div key={item.label + "1"}>
//       <HStack justifyContent="space-between">
//         <ListItem padding="5px 0" key={item.label}>
//           {item.label}
//         </ListItem>
//         <HStack>
//           <ListItem key={item.total}>
//             {Math.round(item.total) + item.unit}
//           </ListItem>
//           <ListItem key={item.daily}>
//             {Math.round(item.daily) + "%"}
//           </ListItem>
//         </HStack>
//       </HStack>
//       {item.sub.map((s) => (
//         <HStack justifyContent="space-between" key={s.label + "1"}>
//           <ListItem key={s.label} padding="5px 5px 5px 20px">
//             {s.label}
//           </ListItem>
//           <HStack>
//             <ListItem key={s.total}>
//               {Math.round(s.total) + item.unit}
//             </ListItem>
//             <ListItem key={s.daily + "1"}>
//               {Math.round(s.daily) + "%"}
//             </ListItem>
//           </HStack>
//         </HStack>
//       ))}
//     </div>
//   ) : (
//     <HStack justifyContent="space-between" key={item.label + "2"}>
//       <ListItem padding="5px 0" key={item.label}>
//         {item.label}
//       </ListItem>
//       <HStack>
//         <ListItem key={item.total}>
//           {Math.round(item.total) + item.unit}
//         </ListItem>
//         <ListItem key={item.total + 1}>
//           {Math.round(item.daily) + "%"}
//         </ListItem>
//       </HStack>
//     </HStack>
//   )
// )}
// </List>
// );
// };
