import React, { useContext } from 'react'
import ProductContext from '../../contexts/ProductsContext'
import Loading from '../LoadingProducts/Loading'

const ProductDetails = ({productId}) => {
    const products =useContext(ProductContext)

    if(products){
      const product = products.find(item => item.id === parseInt(productId) )
      console.log(product)
      return(
       <>{product.description}</>
    )
    
    }
    else{
        return(<Loading/>)
    }
  
}

export default ProductDetails