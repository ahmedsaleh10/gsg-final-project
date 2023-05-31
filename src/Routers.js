import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/ProductDeatilsPage'
import MenPage from './Pages/MenPage'
import WomenPage from './Pages/WomenPage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/products/:id' element={<ProductDetailsPage/>}/>
            <Route path='/men' element={<MenPage/>}/>
            <Route path='/women' element={<WomenPage/>}/>
            <Route path='*' element={<>not found</>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing