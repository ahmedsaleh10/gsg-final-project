import React, { useContext} from 'react'
import TopNav from '../components/TopNav/TopNav'
import Footer from '../components/Footer/Footer'
import Features from '../components/Features/Features'
import WishList from '../components/WishList/WishList'
import FavouriteContext from '../contexts/FavouriteContext'
const FavouritePage = () => {
    const Favourite = useContext(FavouriteContext)

  return (
    <>
        <TopNav/>
        <WishList Products={Favourite.FavouriteProducts} deleteHandler={Favourite.handleDeleteFavouriteProduct}/>
        <Features/>
        <Footer/>
    </>
  )
}

export default FavouritePage


// import React, { useEffect, useState } from 'react'
// import TopNav from '../components/TopNav/TopNav'
// import Footer from '../components/Footer/Footer'
// import Features from '../components/Features/Features'
// import WishList from '../components/WishList/WishList'

// const FavouritePage = () => {
//     const [FavouriteProducts,setFavouriteProducts] = useState(
//         ()=> {
//             const products = JSON.parse(localStorage.getItem('products'))
//             return products || ""
//         }
//     )
//   return (
//     <>
//         <TopNav/>
//         <WishList Products={FavouriteProducts}/>
//         <Features/>
//         <Footer/>
//     </>
//   )
// }

// export default FavouritePage


// import React, { useEffect, useState } from 'react'
// import TopNav from '../components/TopNav/TopNav'
// import Footer from '../components/Footer/Footer'
// import Features from '../components/Features/Features'
// import WishList from '../components/WishList/WishList'

// const FavouritePage = () => {
//     const [FavouriteProducts,setFavouriteProducts] = useState([])
//     useEffect(()=>{
//         const products = JSON.parse(localStorage.getItem('products'))
//         setFavouriteProducts(products)
//     },[])
//   return (
//     <>
//         <TopNav/>
//         <WishList Products={FavouriteProducts}/>
//         <Features/>
//         <Footer/>
//     </>
//   )
// }

// export default FavouritePage