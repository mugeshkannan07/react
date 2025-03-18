import React from 'react'

export const Product = ({id, Productdata}) => {
  const  filteredproduct = Productdata.filter((item) => item.id == id)
  console.log(filteredproduct)

  return (
    <div>
        <div key={pro.id} className='all'>
        <img src={pro.images} alt="" width={200}/>
        <h5>Name : {pro.name}  </h5>
        <h5> ₹ {pro.price} </h5> 
        <h5>{pro.age} Old</h5>
      </div>
    </div>
  )
}
