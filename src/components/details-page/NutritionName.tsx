import { HStack, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { TestNutrition } from "../../hooks/useRecipes";

interface Props {
  nutritions: TestNutrition[];
}

const NutritionName = ({ nutritions }: Props) => {
  return (
    <List paddingLeft={3}>
      {nutritions.map((item) =>
        Object.prototype.hasOwnProperty.call(item, "sub") ? (
          <div key={item.label + "1"}>
            <ListItem padding="5px 0" key={item.label}>
              {item.label}
            </ListItem>
            {item.sub.map((s) => (
              <ListItem key={s.label} padding="5px 5px 5px 20px">
                {s.label}
              </ListItem>
            ))}
          </div>
        ) : (
          <ListItem padding="5px 0" key={item.label}>
            {item.label}
          </ListItem>
        )
      )}
    </List>
  );
};

export default NutritionName;
