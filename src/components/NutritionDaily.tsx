import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { TestNutrition } from "../hooks/useRecipes";
interface Props {
  nutritions: TestNutrition[];
}
const NutritionDaily = ({ nutritions }: Props) => {
  return (
    <List textAlign="right" textColor="gray">
      {nutritions.map((item) =>
        Object.prototype.hasOwnProperty.call(item, "sub") ? (
          <div key={item.label + "2"}>
            <ListItem padding="5px 0" key={item.label + "5"}>
              {Math.round(item.daily) + "%"}
            </ListItem>
            {item.sub.map((s) => (
              <ListItem key={s.label + "2"} paddingY="5px">
                {Math.round(s.daily) + "%"}
              </ListItem>
            ))}
          </div>
        ) : (
          <ListItem padding="5px 0" key={item.label + "6"}>
            {Math.round(item.daily) + "%"}
          </ListItem>
        )
      )}
    </List>
  );
};

export default NutritionDaily;
