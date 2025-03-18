import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../App'


export const Productdetails = ({product}) => {
  const {setId, setCart, cart} = useContext(ShopContext)
  function AddtoCart(){
    setCart([...cart,product])
  }

  function RemoveCart(){
    setCart(cart.filter((e)=>e.id !== product.id))
  }
  return (
    <div>
      <img src={product.images} alt="" width={(200)} />
      <h5>{product.name}</h5>
      <h5> ₹ {product.price}</h5>
      <Link to='/product' onClick={()=>setId(product.id)}>View details</Link>
      {cart.includes(product) ? <button onClick={RemoveCart}>Remove Cart</button>:<button onClick={AddtoCart}>Add cart</button>}
     
    </div>
  )
}
