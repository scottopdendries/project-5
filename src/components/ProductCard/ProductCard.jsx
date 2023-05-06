import React, { useContext } from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import { CartContext } from '../../contexts/CartContext';

import { IoHeartCircleSharp } from "react-icons/io5";
import { createContext } from 'react';

// Capitalizes the first letter of a word
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProductCard({product}) {
  // use global state
  // NOTE: {}, not []
  const {cart, addProduct, removeProduct} = useContext (CartContext)


  // creates state
  const [isCart, setIsCart] = React.useState(false)

  // Checks if the product is in cart. Uses find to return the element, and if found, is considered "true".
  // Returns 'undefined' if not, which is considered "false"
  React.useEffect(
    ()=> {
      setIsCart(cart.find(item=>item.id === product.id))
    }, [cart]
  )

  return (
    <div className="product-card">
      <img src={product.image} />

      <div>
        <p className="product-title">{product.title}</p>
        <p className="product-category">{product.category.toLowerCase().split(" ").map(capitalizeFirstLetter).join(" ")}</p>
        <p className="product-price">{product.price.toFixed(2)}€</p>

        <div className="product-card-buttons">
          <Link to={`/details/${product.id}`}>
            <button>Details</button>
          </Link>
          <button
            onClick={isCart ? () => removeProduct(product.id) : () => addProduct(product)}>
            {isCart ? "Remove" : "Add to cart"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard