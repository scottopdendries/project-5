import {BrowserRouter, Routes, Route} from 
'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Checkout from './pages/Checkout/Checkout'
import ContactUs from './pages/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'

import ThemeContextProvider from './contexts/ThemeContext'
import CartContextProvider from './contexts/CartContext'

function App() {

  const storeName = "Fake Store"

  return (
    <BrowserRouter>
    <ThemeContextProvider>
    <CartContextProvider>

      <Header username={storeName} />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/details/:productId' element={<ProductDetail />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/contactus' element={<ContactUs />}/>
      </Routes>

      <Footer />

    </CartContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
