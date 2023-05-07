import React, { useContext } from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { ThemeContext } from '../../contexts/ThemeContext'

import Modal from 'react-modal'
import { IoTrashOutline } from "react-icons/io5"

function Checkout(product) {

  // Global states
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const {cart, removeProduct} = useContext(CartContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  //create state to control the Modal
  const [isOpen, setIsOpen] = React.useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay:{
      backgroundColor:"rgba(255, 255, 255, 0.6)"
    }
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  

  return (
    // <div className="checkout-container">
    <div className={darkMode?"checkout-container checkout-dark" : "checkout-container"}>
      <div className={darkMode?"checkout-headers checkout-headers-dark" : "checkout-headers"}>
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      
      <div className={darkMode?"checkout-products checkout-products-dark" : "checkout-products"}>
        {
        cart.map(item => (
          <div key={item.id} className="checkout-product">
            <img src={item.image} alt={item.name} />
            <p>{item.title}</p>
            <p>{item.price.toFixed(2)}€</p>
            <p>1</p>
            <button
              onClick={() => removeProduct(item.id)}
              className={darkMode?"checkout-remove checkout-remove-dark" : "checkout-remove"}>
              <IoTrashOutline />
            </button>
          </div>
        ))
        }
      </div>



      <div className={darkMode?"checkout-total checkout-total-dark" : "checkout-total"}>
        <p>Total: {totalPrice}€</p>
        <button className="checkout-button"
          onClick={()=>setIsOpen(true)}>Checkout
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        
        onRequestClose={()=>setIsOpen(false)}
        className="modal-container"
        contentLabel="Checkout Modal"
        >
        <div className="modal-text">
          <p>Your Order was successful!</p>
          <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
          <button className="modal-button">
            <Link to="/" >Return to Home</Link>
          </button>
        </div>
      </Modal>

    </div>
  )
}

export default Checkout