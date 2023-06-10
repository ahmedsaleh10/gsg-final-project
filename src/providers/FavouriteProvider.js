import React from "react";
import FavouritesContext from "../contexts/FavouritesContext";
import { useState } from "react";

const FavouriteProvider = ({ children }) => {
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [favouritesProducts,setFavouritesProducts] = useState([])
  
  const handleFavoriteButton = (product) => {
    const includedProduct = favouritesProducts.includes(product)
    if(!includedProduct){
      setBadgeNumber((prev) => prev + 1)
      setFavouritesProducts([...favouritesProducts,product])
    }
  };

  const handleDeleteFavouriteProduct = (productId) => {
    setBadgeNumber(badgeNumber-1)
    const newFavouritesProducts = favouritesProducts.filter( (product) => product.id !== productId)
    setFavouritesProducts(newFavouritesProducts)
  }

  return (
    <FavouritesContext.Provider value={{ badgeNumber,favouritesProducts, handleFavoriteButton , handleDeleteFavouriteProduct }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouriteProvider;
