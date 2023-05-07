import { useState, createContext, useEffect } from 'react'

// Creates theme state
export const ThemeContext = createContext();

export default function ThemeContextProvider(props){
  // create my global state
  const [darkMode, setDarkMode] = useState(false)

  // check localStorage for initial state of darkmode when context loads
  useEffect(
    ()=> {
      console.log("context loaded")
      // checks for a value in localStorage
      const storedDarkMode = localStorage.getItem('darkMode')
      console.log("value is", storedDarkMode)
      if (storedDarkMode !== null){
        setDarkMode(JSON.parse(storedDarkMode))
      } // otherwise it uses the default value

    }, [] // runs when context loads
  )


  // save darkmode state any time it changes
  useEffect(
    ()=> {
      console.log('darkmode toggled')
      // save current value to localstorage
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode] // runs when darkmode changes
  )


  return(
    <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
      {props.children}
    </ThemeContext.Provider>
  )
}