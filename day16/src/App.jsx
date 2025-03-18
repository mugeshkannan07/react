import React, { createContext, useState } from 'react'
import Productdata from '../json/pet.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Product } from './components/Product'
import { Addcart } from './components/Addcart'
import { Navbar } from './components/Navbar'

export const ShopContext = createContext()

export const App = () => {
  const [id, setId] = useState(null)
  const [cart, setCart] = useState([])

  return (
    <>
   <ShopContext.Provider value={{id,setId,cart,setCart,Productdata}}>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/product' element={<Product /> } />
      <Route path='/addcart' element={<Addcart /> } />
    </Routes>
    </BrowserRouter>
   </ShopContext.Provider>
    </>
  )
}
