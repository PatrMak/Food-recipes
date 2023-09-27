import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navigation/NavBar";
import navStyles from "../components/navigation/NavBar.module.css";
import DetailsGrid from "../components/details-page/DetailsGrid";
import { useTitle } from "../hooks/useTitle";

const Page = () => {
  const location = useLocation();
  useTitle("Food Recipes | " + location.state.recipe.label);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "main" "footer"`,
      }}
      templateColumns="1fr"
      templateRows={{ base: "50px 1fr", lg: "50px 1fr 50px" }}
    >
      <GridItem area="nav" className={navStyles.mobileNav}>
        <NavBar isSearch={false} />
      </GridItem>
      <GridItem
        area="main"
        display="flex"
        justifyContent="center"
        paddingX={{ lg: 10, xl: 100 }}
        paddingY={10}
      >
        <DetailsGrid recipe={location.state.recipe} />
      </GridItem>
      <Show above="lg">
        <GridItem area="footer" sx={{ position: "sticky", bottom: "0" }}>
          <Footer />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Page;
