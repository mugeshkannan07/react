import React, {useRef, useState} from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Hom } from "./components/Hom"
import { Navbar } from "./components/Navbar"
import { Product } from "./components/Product"


const App = () => {
  const [user,setUser] = useState('sam')
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

   <Route path="/" element = {<Hom user={user}/>} />
   <Route path='Product' element = {<Product user={user} setUser={setUser}/>} />

   </Routes>
   </BrowserRouter>
    </>
  )
}


export default App

