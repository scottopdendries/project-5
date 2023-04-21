import React from 'react'
import './Footer.css'

import { AiFillHeart } from "react-icons/ai";


function Footer() {
  return (
    <div className="footer-container">
        <div>Made with
        <AiFillHeart className="heart-icon" />
        by mimo</div>
        <button className="contact-btn">Contact Us</button>
    </div>
  )
}

export default Footer