import React from 'react'
import './Header.css'

import { AiOutlineShoppingCart } from "react-icons/ai";


function Header(props) {
  
  // State (special variable)
  // ** consider changing 'setCount' to 'updateCount'
  const [count, setCount] = React.useState(0)

  const handleIncrement = () => {
    setCount(count+1) }
  const handleDecrement = () => {
    if (count > 0) {setCount(count-1); } }
  const handleClear = () => {
    setCount(0) }

  return (
    <div className="header-container">
      <a href="/" className="home-btn">{props.username}</a>
      <div className="shopping-cart">
        {count > 0 && <p className="shopping-cart-counter">{count}</p>}

        {/* placeholders. these will be used to test cart functionality */}
        <button onClick={handleIncrement}>Inc</button>
        <button onClick={handleDecrement}>Dec</button>
        <button onClick={handleClear}>Clear</button>

        <AiOutlineShoppingCart className="shopping-cart-icon" />
      </div>
    </div>
  )
}

export default Header