import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'
import './css/cardLayout.css'

export const Home = () => {
  const [Show,setShow] = useState(false)
  function Restaurant(){
    setShow(true)
  }
  return (
   <>
  <Navbar/>
  <Hero/>
   <center>
    <h3 className='places'>Vinland Saga</h3>
    <div className="cardLayout">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    {Show ? <>
    <h3 className='places'>Restaurant</h3>
    <div className="restaurant">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    </>: <button onClick={Restaurant}>Click to More</button> }
   </center>
   </>
  )
}





