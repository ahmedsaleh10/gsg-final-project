import React, { useEffect, useState } from "react";
import ProductContext from "../contexts/ProductsContext";
import axios from "axios";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/1a8abb1a-5296-4fa0-b34e-dfbca6937bd3"
    );
    const {data} = response
    setProducts(data);
  };
  useEffect(() => getProducts, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
