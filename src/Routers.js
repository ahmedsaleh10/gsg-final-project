import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/ProductDeatilsPage'
import MenPage from './Pages/MenPage'
import WomenPage from './Pages/WomenPage'
import FavouritePage from './Pages/FavouritePage'
import CartPage from './Pages/CartPage'
import Layout from './Pages/Layout'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/products/:id' element={<ProductDetailsPage/>}/>
              <Route path='/men' element={<MenPage/>}/>
              <Route path='/women' element={<WomenPage/>}/>
              <Route path='/favourite' element={<FavouritePage/>}/>
              <Route path='/cart' element={<CartPage/>} />
              <Route path='*' element={<>not found</>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing