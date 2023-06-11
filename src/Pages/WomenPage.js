import { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import ProductsPage from "../components/ProductsPage/ProductsPage";
import Loading from "../components/LoadingProducts/Loading";

const WomenPage = () => {
  const products = useContext(ProductContext);
  return  (
    <>
      {products ?
       <ProductsPage products={products.filter((product)=>product.category === "women's clothing" && product.sale === false)} />
        : <Loading />}
    </>
  
  );
};

export default WomenPage;
