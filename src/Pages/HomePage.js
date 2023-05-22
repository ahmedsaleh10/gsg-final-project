import React, { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductContext from "../contexts/ProductsContext";
import TopNav from '../components/TopNav/TopNav'
import Footer from "../components/Footer/Footer"
import Loading from "../components/LoadingProducts/Loading";


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
      <Loading/>
    );
  }
};

export default HomePage;
