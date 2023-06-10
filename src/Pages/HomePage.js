import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import Loading from "../components/LoadingProducts/Loading";
import BestSales from "../components/BestSales/BestSales";
import NewProducts from "../components/NewProducts/NewProducts";

const HomePage = () => {
  const products = useContext(ProductContext);
  return products ?
   <>
    <NewProducts products={products}/>
    <BestSales products={products} />
   </> : <Loading />;
};

export default HomePage;
