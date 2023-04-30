import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 
'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import ContactUs from './pages/ContactUs/ContactUs'

import Footer from './components/Footer/Footer'

function App() {

  const storeName = "Fake Store"
  // const title = props.title

  return (
    <BrowserRouter>
      <Header username={storeName} />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/details/:productId' element={<ProductDetail />}/>
        <Route path='/contactus' element={<ContactUs />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
