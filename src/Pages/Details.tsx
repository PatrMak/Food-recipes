import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import navStyles from "../components/NavBar.module.css";

const Page = () => {
  const location = useLocation();
  return (
    <Grid
      templateAreas={{
        lg: `"nav" "main" "footer"`,
      }}
      templateColumns={{
        lg: "1fr",
      }}
      templateRows={{ lg: "50px 1fr 50px" }}
    >
      <GridItem area="nav" className={navStyles.mobileNav}>
        <NavBar isSearch={false} />
      </GridItem>
      <GridItem area="main" bg="purple" display="flex">
        Main
      </GridItem>

      <GridItem area="footer" sx={{ position: "sticky", bottom: "0" }}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Page;
