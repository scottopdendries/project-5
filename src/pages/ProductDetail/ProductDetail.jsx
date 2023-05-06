import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import axios from 'axios'

function ProductDetail() {
  // Gets the ID of the product from the URL
  const {productId} = useParams()

  // Uses state to hold API data
  const [product, setProduct] = React.useState('')

  // Example: https://fakestoreapi.com/products/3

  // Retrieves API data when the page loads
  React.useEffect(
    ()=>{
      // Uses axios to make API call
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res=>{
        console.log(res.data)
        // Stores data in state
        setProduct(res.data)
      })
      .catch(err => console.log(err))

    }, [] // Runs only once when page loads
  )

  return (
    <div className="details-container">
      <img src={product?.image} />
      <div className="container-info">
        <p>{product?.title}</p>
        <p>{product?.price}€</p>
        {/* <p>{product?.price.toFixed(2)}€</p> */}
        <p>Description</p>
        <p>{product?.description}</p>
        <button>Add to Cart</button>

      </div>
    </div>
  )
}

export default ProductDetail