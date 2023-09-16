import { Grid, GridItem, Show } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import RecipesGrid from "./components/RecipesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bgGradient="linear(to-b, #f7f7f7 0%, #e3e3e3 100%)">
        <NavBar onSearch={(searchTxt) => console.log(searchTxt)} />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="orange">
          aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <RecipesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
