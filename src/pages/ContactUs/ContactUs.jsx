import React, { useContext } from 'react'
import './ContactUs.css'
import { ThemeContext } from '../../contexts/ThemeContext'


function ContactUs() {

  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"contact-background contact-dark" : "contact-background"}>
      <h1>Contact Us</h1>
      {/* <form className="contact-container"> */}
      <form className={darkMode?"contact-container contact-container-dark" : "contact-container"}>
        <label htmlFor="first-name"></label>
        <input type="text" id="first-name" placeholder="First Name"/>

        <label htmlFor="last-name"></label>
        <input type="text" id="last-name" placeholder="Last Name"/>

        <label htmlFor="message"></label>
        <textarea id="message" rows="4" placeholder="Write your message here"></textarea>
        <button className="contact-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUs