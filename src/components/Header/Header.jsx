import React, { useContext } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineShoppingCart } from "react-icons/ai";



function Header(props) {
  
  // Global states
  const { cart } = useContext(CartContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"header-container header-dark" : "header-container"}>

      {/* HomePage link */}
      <Link to="/" className="home-button">{props.username}</Link>

      <div className="mode-and-cart">
        {/* Mode Toggle */}
        <button className="theme-button"
          onClick={()=>setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Checkout link */}
        <Link to="/checkout" className="shopping-cart">
          {cart.length > 0 &&
          <p className="shopping-cart-counter">{cart.length}</p>}
          <AiOutlineShoppingCart className="shopping-cart-icon" />
        </Link>
      </div>

    </div>
  )
}

export default Header