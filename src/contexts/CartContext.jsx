import { useState, createContext, useEffect } from 'react'

// Creates cart state
export const CartContext = createContext();

export default function CartContextProvider(props){
  // Creates global state
  const [cart, setCart] = useState([])

  // Checks localStorage for initial state when context loads
  useEffect(
    ()=> {
      console.log("context loaded")
      // Checks for a value in localStorage
      const storedCart = localStorage.getItem('cartList')
      // console.log("value is", storedCart)
      if (storedCart){
        setCart(JSON.parse(storedCart))
      } // Otherwise it uses the default value

    }, [] // Runs when context loads
  )

  const addProduct = (productToAdd) => {
    console.log('add', productToAdd)
    let newCart = [...cart, productToAdd]
    console.log(newCart)
    // Updates state
    setCart(newCart)
    // Updates local storage
    localStorage.setItem('cartList', JSON.stringify(newCart))
  }

  const removeProduct = (productId) => {
    console.log('remove', productId)
    // Uses filter to keep all values that don't match
    let newCart = cart.filter(item=>item.id != productId)
    // Updates state
    setCart(newCart)
    // Updates local storage
    localStorage.setItem('cartList', JSON.stringify(newCart))
  }

  return(
    <CartContext.Provider value={{ cart, addProduct, removeProduct }} >
      {props.children}
    </CartContext.Provider>
  )
}