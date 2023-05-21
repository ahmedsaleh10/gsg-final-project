import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing