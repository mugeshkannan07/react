import React, { useContext } from 'react';
import { ShopContext } from '../App';

export const Cartproduct = () => {
  const { setCart, cart } = useContext(ShopContext);

  const RemoveFromCart = (proremove) => {
    setCart(cart.filter((item) => item.id !== proremove));
  };

  return (
    <>
      {cart.map((product) => (
        <div key={product.id}>
            <ul>
                <li><img src={product.images} alt="" width={200}/></li>
                <li>Name : {product.name}</li>
                <li>Price : ₹ {product.price}</li>
                <li>Gender : {product.gender}</li>
                <li>Age : {product.age}</li>
            </ul>
            <button onClick={()=>RemoveFromCart(product.id)}>Remove from Cart</button>
        </div>
      ))}
    </>
  );
};
