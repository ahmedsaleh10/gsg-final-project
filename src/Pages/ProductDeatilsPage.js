import React from 'react'
import { useParams } from 'react-router'
import ProductDetails from '../components/ProductDetails/ProductDetails'

const ProductDeatilsPage = () => {
    
  const {id} = useParams()
  return (<ProductDetails key={id} productId={id}/> )
}

export default ProductDeatilsPage