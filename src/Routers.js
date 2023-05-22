import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductDeatils from './Pages/ProductDeatilsPage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/products/:id' element={<ProductDeatils/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing