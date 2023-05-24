import React, { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductContext from "../contexts/ProductsContext";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import Loading from "../components/LoadingProducts/Loading";
import Features from "../components/Features/Features";

const HomePage = () => {
  const products = useContext(ProductContext);
  if (products) {
    return (
      <>
        <TopNav />
        <Features/>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <TopNav />
        <Loading />
        <Footer />
      </>
    );
  }
};

export default HomePage;
