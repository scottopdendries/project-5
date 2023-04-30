import React from 'react'
import './Footer.css'

import { AiFillHeart } from "react-icons/ai";


function Footer() {
  return (
    <div className="footer-container">
        <div>Made with
        <AiFillHeart className="heart-icon" />
        by mimo</div>
        <a href="/contactus" className="contact-btn">Contact Us</a>
    </div>
  )
}

export default Footer