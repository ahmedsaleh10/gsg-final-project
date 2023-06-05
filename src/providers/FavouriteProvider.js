import React from "react";
import FavouriteContext from "../contexts/FavouriteContext";
import { useState,useEffect } from "react";

const FavouriteProvider = ({ children }) => {
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [FavouriteProducts,setFavouriteProducts] = useState([])
  
  const handleFavoriteButton = (product) => {
    const includedProduct = FavouriteProducts.includes(product)
    if(!includedProduct){
      setBadgeNumber((prev) => prev + 1)
      setFavouriteProducts([...FavouriteProducts,product])
    }
  };

  const handleDeleteFavouriteProduct = (productId) => {
    setBadgeNumber(badgeNumber-1)
    const newFavouriteProducts = FavouriteProducts.filter( (product) => product.id !== productId)
    setFavouriteProducts(newFavouriteProducts)
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(FavouriteProducts));
  }, [FavouriteProducts]);

  useEffect(() => {
    localStorage.setItem('badge', JSON.stringify(badgeNumber));
  }, [badgeNumber]);

  return (
    <FavouriteContext.Provider value={{ badgeNumber,FavouriteProducts, handleFavoriteButton , handleDeleteFavouriteProduct }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
