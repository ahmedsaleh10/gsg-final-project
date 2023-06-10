import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductsContext";
import Loading from "../LoadingProducts/Loading";
import ProductDetail from "./ProductDetail";
import Features from '../Features/Features'

const ProductDetails = ({ productId }) => {
  const products = useContext(ProductContext);
  return (
    <>
      {products ? 
        <ProductDetail
          product={products.find((item) => item.id === parseInt(productId))}
          key={productId}
        />
       : 
        <Loading />
      }
      <Features/>
    </>
  );
};

export default ProductDetails;
