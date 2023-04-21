import React from 'react'
import './Search.css'
import axios from 'axios'

function Search(setProducts) {

    // need state to store user input
    const [query, setQuery] = React.useState('')

    const handleSearch = (e) => {
      // stops default form action to refresh page
      e.preventDefault();

      console.log(query)
      //make api call to get products that match
      axios.get(`https://fakestoreapi.com/products/?title=${query}`)
      .then(res =>{
        console.log(res.data.results)
        // change what is in products
        setProducts(res.data.results)
      })
      .catch(err => console.log(err))
    }

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input  type="text"
              onChange={(e)=>setQuery(e.target.value)}
      
              placeholder="Search all products" />
    </form>
  )
}

export default Search