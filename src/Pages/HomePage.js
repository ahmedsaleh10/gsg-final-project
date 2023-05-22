import React, { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductContext from "../contexts/ProductsContext";
import TopNav from '../components/TopNav/TopNav'
import Footer from "../components/Footer/Footer"
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

const HomePage = () => {
  const products = useContext(ProductContext);
  if (products) {
    return (
      <>
      <TopNav/>
        <ProductCard product={products[0]} />
        <Footer/>
      </>
    );
  } else {
    return (
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        my={4}
        width={"100%"}
        height={"100vh"}
      >
        <CircularProgress />
        <Typography variant="body1">Loading...</Typography>
      </Stack>
    );
  }
};

export default HomePage;
