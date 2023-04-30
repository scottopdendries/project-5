import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="contact-background">
      <h1>Contact Us</h1>
      <form className="contact-container">
        <label htmlFor="first-name"></label>
        <input type="text" id="first-name" placeholder="First Name"/>

        <label htmlFor="last-name"></label>
        <input type="text" id="last-name" placeholder="Last Name"/>

        <label htmlFor="message"></label>
        <textarea id="message" rows="4" placeholder="Write your message here"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactUs