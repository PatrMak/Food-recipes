import {
  Box,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import RecipesGrid from "./components/RecipesGrid";
import FilterList from "./components/FilterList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import AsideSm from "./components/AsideSm";
import navStyles from "./components/NavBar.module.css";
export interface RecipeQuery {
  q: string;
  diet: string;
  health: string;
  cuisineType: string;
  mealType: string;
  dishType: string;
}

function App() {
  const [selectedFilter, setSelectedFilter] = useState<RecipeQuery>(
    {} as RecipeQuery
  );
  const [isActiveFilters, setActiveFilters] = useState(false);
  const [isLargerThan992]: boolean[] = useMediaQuery("(min-width: 992px)");
  const [isLargerThan768]: boolean[] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    isLargerThan992
      ? setActiveFilters(false)
      : setActiveFilters(isActiveFilters);
  }, [isActiveFilters, isLargerThan992]);

  return (
    <Grid
      templateAreas={{
        base: isActiveFilters
          ? `"nav nav" "aside aside-sm"`
          : `"nav nav" "aside-sm main"`,
        md: isActiveFilters
          ? `"nav nav nav" "aside aside-sm main"`
          : `"nav nav" "aside-sm main"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: isActiveFilters ? "1fr 20px" : "20px 1fr",
        md: isActiveFilters ? "200px 20px 1fr" : "20px 1fr",
        lg: "200px 1fr",
      }}
      templateRows={{ base: "50px 1fr", lg: "50px 1fr 50px" }}
    >
      <GridItem
        className={navStyles.mobileNav}
        area="nav"
        bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)"
      >
        <NavBar
          onSearch={(searchTxt) =>
            setSelectedFilter({
              ...selectedFilter,
              q: searchTxt !== "" ? searchTxt : selectedFilter.q,
            })
          }
        />
      </GridItem>
      {(isActiveFilters || isLargerThan992) && (
        <GridItem
          area="aside"
          paddingX={2}
          borderRight="1px solid #e3e3e3 "
          borderTop="1px solid #FFF"
          bgGradient="linear(to-r, #f7f7f7 15%, #e3e3e3 50%)"
        >
          <FilterList
            onSelectedFilters={(filter, item) =>
              setSelectedFilter({
                ...selectedFilter,
                diet: filter === "Diet" ? item : selectedFilter.diet,
                health: filter === "Health" ? item : selectedFilter.health,
                cuisineType:
                  filter === "Cuisine" ? item : selectedFilter.cuisineType,
                mealType: filter === "Meal" ? item : selectedFilter.mealType,
                dishType: filter === "Dish" ? item : selectedFilter.dishType,
              })
            }
          />
        </GridItem>
      )}
      <Show below="lg">
        <GridItem
          h="100vh"
          area="aside-sm"
          bgGradient="linear(to-r, #f7f7f7 0%, #e3e3e3 100%)"
          alignContent="center"
          display="flex"
          flexWrap="wrap"
          sx={{ position: "sticky", top: "0" }}
          overflow="hidden"
        >
          <AsideSm onShowFilters={(isActive) => setActiveFilters(isActive)} />
        </GridItem>
      </Show>
      {(!isActiveFilters || isLargerThan768) && (
        <GridItem
          area="main"
          paddingX={2}
          justifyContent="center"
          display="flex"
        >
          <RecipesGrid
            isActiveFilters={isActiveFilters}
            selectedFilters={selectedFilter}
          />
        </GridItem>
      )}
      <Show above="lg">
        <GridItem
          area="footer"
          bg="#E6E6E6"
          borderTop="1px solid #FFF"
          sx={{ position: "sticky", bottom: "0" }}
        >
          <Footer />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
