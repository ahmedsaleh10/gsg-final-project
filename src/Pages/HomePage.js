import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
import Loading from "../components/LoadingProducts/Loading";
import BestSales from "../components/BestSales/BestSales";

const HomePage = () => {
  const products = useContext(ProductContext);
  return products ?
   <>
    <BestSales products={products} />
   </> : <Loading />;
};

export default HomePage;
