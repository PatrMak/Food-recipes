import { Grid, GridItem, Show } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import RecipesGrid from "./components/RecipesGrid";
import FilterList from "./components/FilterList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      templateRows={"50px 1fr 50px"}
    >
      <GridItem area="nav" bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)">
        <NavBar onSearch={(searchTxt) => console.log(searchTxt)} />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={2}
          borderRight="1px solid #e3e3e3 "
          borderTop="1px solid #FFF"
          bgGradient="linear(to-r, #f7f7f7 15%, #e3e3e3 50%)"
        >
          <FilterList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <RecipesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
