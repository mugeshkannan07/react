import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({setId, Productdata}) => {
   
  return (
    <>
    {Productdata.map((item) => (
        <div key={item.id}>
        <img src={item.images} alt="" width={200} /> 
        <h5>{item.name}</h5>
        <Link to='/Product' onClick={() => setId (item.id)}>View Details</Link>

        </div>
    ))}
    </>
  )
}
