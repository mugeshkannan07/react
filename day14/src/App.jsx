import { useState } from 'react'
import Productdata from '../json/pet.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Product } from './components/Product'

function App() {
  const [id, setId] = useState(null)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home setId={setId} Productdata={Productdata} /> } />
      <Route path='/Product' element={<Product id={id} Productdata={Productdata} /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
