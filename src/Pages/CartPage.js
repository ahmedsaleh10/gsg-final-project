import React, { useContext } from 'react'
import Features from '../components/Features/Features'
import CartList from '../components/CartList/CartList'
import CartContext from '../contexts/CartContext'

const CartPage = () => {
    const cart = useContext(CartContext)
  return (
    <>
        <CartList products={cart.cartProducts} deleteHandler={cart.handleDeleteCartProduct}/>
        <Features/>
    </>
  )
}

export default CartPage