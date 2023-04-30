import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setProducts}) {

    // use state to store user input
    const [query, setQuery] = React.useState('')

    const handleSearch = (e) => {
      // prevents default form action (page refresh)
      e.preventDefault();

      console.log(query)
      // makes API call to get products that match
      axios.get(`https://fakestoreapi.com/products/?title=${query}`)
      .then(res =>{
        console.log(res.data.results)
        // changes what is in products
        setProducts(res.data.results)
      })
      // .catch(err => console.log(err))
      .catch(err => {
        // gives error message if not found
        if (err.response.status === 404){
          alert(`There is no product named ${query}`)
        }
        else{
          console.log(err)
        }
      })

      // clears textbox
      setQuery('')
  }


  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input  type="text" value={query}
              onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search all products" />
    </form>
  )
}

export default Search