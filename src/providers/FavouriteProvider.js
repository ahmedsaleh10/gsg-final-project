import React from "react";
import FavouriteContext from "../contexts/FavouriteContext";
import { useState } from "react";

const FavouriteProvider = ({ children }) => {
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [FavouriteProducts,setFavouriteProducts] = useState([])
  const handleFavoriteButton = (product) => {
    setBadgeNumber((prev) => prev + 1);
    const newFavouriteProducts = [...FavouriteProducts,product]
    setFavouriteProducts(newFavouriteProducts)
  };

  return (
    <FavouriteContext.Provider value={{ badgeNumber,FavouriteProducts, handleFavoriteButton }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
