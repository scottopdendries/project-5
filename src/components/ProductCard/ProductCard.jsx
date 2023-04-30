import React from 'react'
import './ProductCard.css'

import { IoHeartCircle } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";


function ProductCard({product}) {
  return (
    <div className="product-card">
      <IoHeartCircle className="heart-icon" />
      <IoHeartCircleSharp className="heart-icon" />
      <img src={product.image} />
      <p>{product.title}</p>
      <a href={`/details/${product.id}`}>See Details</a>
    </div>
  )
}

export default ProductCard