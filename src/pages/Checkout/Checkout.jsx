import React, { useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'

import { IoTrashOutline } from "react-icons/io5";

function Checkout() {

  // global state
  // NOTE: {}, not []
  const {cart} = useContext(CartContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="checkout-container">
      <div className="checkout-headers">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      
      <div className="checkout-products">
        {
        cart.map(item => (
          <div key={item.id} className="checkout-product">
            <img src={item.image} alt={item.name} />
            <p>{item.title}</p>
            <p>{item.price.toFixed(2)}€</p>
            <p>1</p>
            <IoTrashOutline className="checkout-trash"/>
          </div>
        ))
        }
      </div>



      <div className="checkout-total">
        <p>Total: {totalPrice}€</p>
        <p>ADD CHECKOUT BUTTON</p>
      </div>
    </div>
  )
}

// function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

export default Checkout