import { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import ProductsPage from "../components/ProductsPage/ProductsPage";
import Loading from "../components/LoadingProducts/Loading";
import TopNav from "../components/TopNav/TopNav";
import Footer from "../components/Footer/Footer";
const MenPage = () => {
  const products = useContext(ProductContext);
  return  (
    <>
      <TopNav />
      {products ?
       <ProductsPage products={products.filter((product)=>product.category === "men's clothing" && product.sale === false)} />
        : <Loading />}
      <Footer />
    </>
  
  );
};

export default MenPage;
