import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import Loading from "../components/LoadingProducts/Loading";
import BestSales from "../components/BestSales/BestSales";
import NewProducts from "../components/NewProducts/NewProducts";
import { signOut } from "firebase/auth"
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
import Features from "../components/Features/Features";

const HomePage = () => {
  const products = useContext(ProductContext);
  const navigate = useNavigate()
  const userSignOut = () =>{
      signOut(auth)
      navigate('/')
  }

  return( products ?
   <>
    <NewProducts products={products}/>
    <Features/>
    <BestSales products={products} />
    <button onClick={userSignOut}>SignOut</button>
   </> : <Loading />)
};

export default HomePage;
