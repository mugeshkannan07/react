import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../App'
import { Cartproduct } from './Cartproduct'

export const Addcart = () => {
  const {cart} = useContext(ShopContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((prev,current) => prev+parseInt(current.price),0))
  },[cart])
 
  return (
    <div>
      <h1>Total Amount : ₹{total}</h1>
      {cart.map((product) =>(
        <Cartproduct key={product.id} product={product}/>
      ))}
    </div>
  )
}
