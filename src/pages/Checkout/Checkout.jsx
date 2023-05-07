import React, { useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext'
import { ThemeContext } from '../../contexts/ThemeContext'

import Modal from 'react-modal'
import { IoTrashOutline } from "react-icons/io5"

function Checkout(product) {

  // global state
  // NOTE: {}, not []
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
    <div className="checkout-container">
      <div className="checkout-headers">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      
      {/* add background-color? */}
      <div className="checkout-products">
        {
        cart.map(item => (
          <div key={item.id} className="checkout-product">
            <img src={item.image} alt={item.name} />
            <p>{item.title}</p>
            <p>{item.price.toFixed(2)}€</p>
            <p>1</p>
            <button
              onClick={() => removeProduct(item.id)}
               className="checkout-remove"
              >
              <IoTrashOutline className="checkout-remove" />
            </button>
          </div>
        ))
        }
      </div>



      <div className="checkout-total">
        <p>Total: {totalPrice}€</p>
        <button className="checkout-button"
                onClick={()=>setIsOpen(true)}>Checkout</button>     
      </div>

      <Modal
        isOpen={isOpen}
        
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Us Modal"
        >
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="modal-close-btn"
                  onClick={()=>setIsOpen(false)}>X</button>
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </Modal>

    </div>
  )
}

// function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

export default Checkout