import React, { useEffect, useState } from "react";
import ProductContext from "../contexts/ProductsContext";
import axios from "axios";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/89cea58a-97a5-4ab9-aefa-6ecd6021b483"
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
