import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { TestNutrition } from "../hooks/useRecipes";
interface Props {
  nutritions: TestNutrition[];
}

const NutritionTotal = ({ nutritions }: Props) => {
  return (
    <List textAlign="right">
      {nutritions.map((item) =>
        Object.prototype.hasOwnProperty.call(item, "sub") ? (
          <div key={item.label + "2"}>
            <ListItem padding="5px 0" key={item.label + "3"}>
              {Math.round(item.total) + item.unit}
            </ListItem>
            {item.sub.map((s) => (
              <ListItem key={s.label + "1"} paddingY="5px">
                {Math.round(s.total) + s.unit}
              </ListItem>
            ))}
          </div>
        ) : (
          <ListItem padding="5px 0" key={item.label + "4"}>
            {Math.round(item.total) + item.unit}
          </ListItem>
        )
      )}
    </List>
  );
};

export default NutritionTotal;
