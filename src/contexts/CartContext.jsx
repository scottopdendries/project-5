import { useState, createContext, useEffect } from 'react'

// create the state
export const CartContext = createContext();

export default function CartContextProvider(props){
  // creates global state
  const [cart, setCart] = useState([])

  // checks localStorage for initial state when context loads
  useEffect(
    ()=> {
      console.log("context loaded")
      // checks for a value in localStorage
      const storedCart = localStorage.getItem('cartList')
      // console.log("value is", storedCart)
      if (storedCart){
        setCart(JSON.parse(storedCart))
      } // otherwise it uses the default value

    }, [] // runs when context loads
  )

  const addProduct = (productToAdd) => {
    console.log('add', productToAdd)
    let newCart = [...cart, productToAdd]
    // console.log(newCart)
    // update state
    setCart(newCart)
    // update local storage
    localStorage.setItem('cartList', JSON.stringify(newCart))
  }

  const removeProduct = (productId) => {
    console.log('remove', productId)
    // uses filter to keep all values that don't match
    let newCart = cart.filter(item=>item.id !== productId)
    // updates state
    setCart(newCart)
    // updates local storage
    localStorage.setItem('cartList', JSON.stringify(newCart))
  }

  return(
    <CartContext.Provider value={{ cart, addProduct, removeProduct }} >
      {props.children}
    </CartContext.Provider>
  )
}