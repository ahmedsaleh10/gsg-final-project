import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductsContext";
import Loading from "../LoadingProducts/Loading";
import ProductDetail from "./ProductDetail";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";
import Features from '../Features/Features'

const ProductDetails = ({ productId }) => {
  const products = useContext(ProductContext);
  return (
    <>
      <TopNav/>
      {products ? 
        <ProductDetail
          product={products.find((item) => item.id === parseInt(productId))}
          key={productId}
        />
       : 
        <Loading />
      }
      <Features/>
      <Footer/>
    </>
  );
};

export default ProductDetails;
