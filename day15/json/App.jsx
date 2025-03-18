import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import ProductData from '../json/pet.json'


 const App = () => {
  const [id, setId] = useState(null)
  console.log(ProductData)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home setId={setId} ProductData={ProductData} /> } />
      <Route path ='/Product' element={<Product id={id} ProductData={ProductData} /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App