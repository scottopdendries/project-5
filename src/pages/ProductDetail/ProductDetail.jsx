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
        <p>Name: {product?.title}</p>
        <p>Price: {product?.price}</p>
        <p>Description</p>
        <p>{product?.description}</p>
        <button>Add to Cart</button>

        {/* <p>Gender: {product?.gender}</p>
        <p>Location: {character?.location?.name}</p>
        <p>Species: {character?.species}</p> */}
      </div>
    </div>
  )
}

export default ProductDetail