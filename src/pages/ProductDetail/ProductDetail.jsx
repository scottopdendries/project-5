import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import axios from 'axios'
import { CartContext } from '../../contexts/CartContext'
import { ThemeContext } from '../../contexts/ThemeContext'



function ProductDetail() {
  
  // Gets the ID of the product from the URL
  const {productId} = useParams()

  // Global states
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  const {cart, addProduct, removeProduct} = useContext (CartContext)

  // Creates state
  const [isCart, setIsCart] = React.useState(true)

  // Uses state to hold API data
  const [product, setProduct] = React.useState('')
  
   // Retrieves API data when the page loads
   React.useEffect(
    ()=>{
      // Uses axios to make API call
      console.log("loaded")
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res=>{
        console.log(res.data)
        // Stores data in state
        setProduct(res.data)
      })
      .catch(err => console.log(err))
      // console.log(typeof(productId))
      // console.log("a", cart.find(item=>item.id == productId))
      // setIsCart(cart.find(item=>item.id == productId))
      
    }, [] // Runs only once when page loads
  )
  
  // Checks if the product is in cart. Uses find to return the element, and if found, is considered "true".
  // Returns 'undefined' if not, which is considered "false"
  React.useEffect(()=> {
    console.log("check cart", productId)
    // check if this product is in the cart
    console.log(cart)
      setIsCart(cart.find(item=>item.id == productId))
    }, [cart]
  )

  // Example: https://fakestoreapi.com/products/3



  return (
    <div className={darkMode?"details-container details-dark" : "details-container"}>
      <div className="details-product">
        <img src={product?.image} />
        <div className="details-info">
          <p className="details-title">
            {product?.title}
          </p>
          {/* <p className="details-price">{product?.price.toFixed(2)}€</p> */}
          <p className="details-description-header">
            Description
          </p>
          <p className="details-description-text">
            {product?.description}
          </p>
          <button
            onClick={isCart ? () => removeProduct(productId) : () => addProduct(product)}>
            {isCart ? "Remove" : "Add to cart"}
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail