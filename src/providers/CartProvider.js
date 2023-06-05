import React from 'react'
import CartContext from '../contexts/CartContext'
import { useState } from 'react';

const CartProvider = ({children}) => {
    const [badgeNumber, setBadgeNumber] = useState(0);
    const [CartProducts,setCartProducts] = useState([])

    const handleCartButton = (product) => {
        const includedProduct = CartProducts.includes(product)
        if(!includedProduct){
          setBadgeNumber((prev) => prev + 1)
          setCartProducts([...CartProducts,product])
        }
      };

    const handleDeleteCartProduct = (productId) => {
        setBadgeNumber(badgeNumber-1)
        const newCartProducts = CartProducts.filter( (product) => product.id !== productId)
        setCartProducts(newCartProducts)
    }   

  return (
    <CartContext.Provider value={{badgeNumber,CartProducts,handleCartButton,handleDeleteCartProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider