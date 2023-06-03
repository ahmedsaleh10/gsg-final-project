import React from "react";
import FavoraiteContext from "../contexts/FavoraiteContext";
import { useState } from "react";

const FavoraiteProvider = ({ children }) => {
  const [badgeNumber, setBadgeNumber] = useState(0);
  const handleFavoriteButton = () => {
    setBadgeNumber((prev) => prev + 1);
  };

  return (
    <FavoraiteContext.Provider value={{ badgeNumber, handleFavoriteButton }}>
      {children}
    </FavoraiteContext.Provider>
  );
};

export default FavoraiteProvider;
