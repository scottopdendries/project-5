import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'

// import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {

  const storeName = "Fake Store"
  const day = "Monday"
  // const title = props.title

  return (
    <div className="App">
      <Header username={storeName} />
      <p>Today is {day}</p>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
