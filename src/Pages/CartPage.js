import React, { useContext } from 'react'
import TopNav from '../components/TopNav/TopNav'
import Footer from '../components/Footer/Footer'
import Features from '../components/Features/Features'
import CartList from '../components/CartList/CartList'
import CartContext from '../contexts/CartContext'

const CartPage = () => {
    const Cart = useContext(CartContext)
  return (
    <>
        <TopNav/>
        <CartList products={Cart.CartProducts} deletehandler={Cart.handleDeleteCartProduct}/>
        <Features/>
        <Footer/>
    </>
  )
}

export default CartPage