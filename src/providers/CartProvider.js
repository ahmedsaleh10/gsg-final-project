import React from 'react'
import CartContext from '../contexts/CartContext'
import { useState } from 'react';

const CartProvider = ({children}) => {
    const [badgeNumber, setBadgeNumber] = useState(0);
    const [cartProducts,setCartProducts] = useState([])

    const handleCartButton = (product,numberOfItems = 1) => {
        for(let i = 0 ; i<cartProducts.length;i++){
            if(cartProducts[i].product === product){
                var includedProduct = true
            }
            else{
                includedProduct =false
            }
        }
        if(!includedProduct){
          setBadgeNumber((prev) => prev + 1)
        setCartProducts([...cartProducts,{"product":product,"numberOfProductDemand":numberOfItems}])
        }
      };

    const handleDeleteCartProduct = (productId) => {
        setBadgeNumber(badgeNumber-1)
        const newCartProducts = cartProducts.filter( (item) => item.product.id !== productId)
        setCartProducts(newCartProducts)
    } 

  return (
    <CartContext.Provider value={{badgeNumber,cartProducts,handleCartButton,handleDeleteCartProduct}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider