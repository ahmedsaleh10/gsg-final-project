import React, { useContext } from 'react'
import TopNav from '../components/TopNav/TopNav'
import Footer from '../components/Footer/Footer'
import Features from '../components/Features/Features'
import CartList from '../components/CartList/CartList'
import CartContext from '../contexts/CartContext'

const CartPage = () => {
    const cart = useContext(CartContext)
  return (
    <>
        <TopNav/>
        <CartList products={cart.cartProducts} deleteHandler={cart.handleDeleteCartProduct}/>
        <Features/>
        <Footer/>
    </>
  )
}

export default CartPage