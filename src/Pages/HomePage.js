import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import Loading from "../components/LoadingProducts/Loading";
import BestSales from "../components/BestSales/BestSales";

const HomePage = () => {
  const products = useContext(ProductContext);
  if (products) {
    return (
      <>
        <TopNav />
        <BestSales products={products}/>
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
