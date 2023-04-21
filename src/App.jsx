import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'

function App() {

  const storeName = "Fake Store"
  // const title = props.title

  return (
    <div className="App">
      <Header username={storeName} />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
