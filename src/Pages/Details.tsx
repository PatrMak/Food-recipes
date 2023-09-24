import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Page = () => {
  const location = useLocation();
  return (
    <Grid>
      <GridItem area="nav"></GridItem>
      <NavBar isSearch={false} />
      <GridItem area="main" bg="purple">
        Main
      </GridItem>

      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Page;
