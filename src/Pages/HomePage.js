import React, { useContext } from "react";
import ProductContext from "../contexts/ProductsContext";
import Loading from "../components/LoadingProducts/Loading";
import BestSales from "../components/BestSales/BestSales";
import NewProducts from "../components/NewProducts/NewProducts";
import { signOut } from "firebase/auth"
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
import Features from "../components/Features/Features";
import AuthUserContext from "../contexts/AuthUserContext";
import useStyles from "../components/404/Styles";

const HomePage = () => {
  const products = useContext(ProductContext);
  const navigate = useNavigate()
  const authUser = useContext(AuthUserContext)
  const classes = useStyles()
  const userSignOut = () =>{
      signOut(auth)
      navigate('/')
  }

  return( products ?
   <>
    <NewProducts products={products}/>
    <Features/>
    <BestSales products={products} />
    {authUser ? <center><button onClick={userSignOut} className={classes.signButton}>Log Out</button></center> : <center> <button onClick={()=>{navigate('/')}} className={classes.signButton} >Sign In</button> </center>}
   </> : <Loading />)
};

export default HomePage;
