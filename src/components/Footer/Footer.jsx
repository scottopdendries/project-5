import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-text">Made with <AiFillHeart className="footer-heart" /> by mimo</div>
        <Link to="/contactus" className="footer-button">Contact Us</Link>
    </div>
  )
}

export default Footer