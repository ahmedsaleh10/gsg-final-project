import React from 'react'
import CartContext from '../contexts/CartContext'
import { useState } from 'react';

const CartProvider = ({children}) => {
    const [badgeNumber, setBadgeNumber] = useState(0);
    const [CartProducts,setCartProducts] = useState([])

    const handleCartButton = (product,numberOfItems = 1) => {
        for(let i = 0 ; i<CartProducts.length;i++){
            if(CartProducts[i].product === product){
                var includedProduct = true
            }
            else{
                includedProduct =false
            }
        }
        if(!includedProduct){
          setBadgeNumber((prev) => prev + 1)
        setCartProducts([...CartProducts,{"product":product,"numberOfProductDemand":numberOfItems}])
        }
      };

    const handleDeleteCartProduct = (productId) => {
        setBadgeNumber(badgeNumber-1)
        const newCartProducts = CartProducts.filter( (item) => item.product.id !== productId)
        setCartProducts(newCartProducts)
    } 

  return (
    <CartContext.Provider value={{badgeNumber,CartProducts,handleCartButton,handleDeleteCartProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider