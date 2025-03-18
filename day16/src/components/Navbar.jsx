import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../App'

export const Navbar = () => {
  const {cart} = useContext(ShopContext)
  return (
    <div>
       <Link to='/Home' >Home</Link> 
       <Link to='/Productdetails' >Product{cart.length}</Link>
       <Link to='/Addcart' >ViewCart</Link>
    </div>
  )
}
