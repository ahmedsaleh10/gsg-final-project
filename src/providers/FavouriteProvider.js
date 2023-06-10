import React from "react";
import FavouriteContext from "../contexts/FavouriteContext";
import { useState } from "react";

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

  return (
    <FavouriteContext.Provider value={{ badgeNumber,FavouriteProducts, handleFavoriteButton , handleDeleteFavouriteProduct }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
