import React, { useContext } from 'react'
import { Productdetails } from './Productdetails'
import { ShopContext } from '../App'

export const Home = () => {
  const {Productdata} = useContext(ShopContext)
 
  return (
    <>
    {Productdata.map((product) => (
    <Productdetails key={product.id} product={product} />
    ))}
    </>
  )
}
