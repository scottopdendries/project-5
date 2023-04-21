import React, {useEffect, useState} from 'react'
import "./HomePage.css"
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
// import Search from '../../components/Search/Search'

function HomePage() {

  // creates state to store products
  const[products, setProducts] = useState([])

  // makes api call when the page loads
  useEffect(
    ()=>{
      console.log('homepage loaded')
        // uses axios to make api call
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
          console.log(res.data)
          // stores data in state
          setProducts(res.data)
          }
          )
          .catch(err => console.log(err))
      }, []  // runs only once when page loads
    )


  
    const [filter, setFilter] = useState('all')

    const filters = ["All", "Electronics", "Jewelery", " Men's Clothing", "Women's Clothing"]

    const changeFilter = (filter) => {
      // change the filter to the parameter
      console.log(filter)
      setFilter(filter)
    }

    // https://fakestoreapi.com/products/category/electronics
    // https://fakestoreapi.com/products/category/jewelery
    // https://fakestoreapi.com/products/category/men%27s%20clothing
    // https://fakestoreapi.com/products/category/women%27s%20clothing



  return (
    <div className="home-container">
        <div className="filter-and-search">
          <div className="filter-container">
            {
              filters.map(item=><button onClick={()=>setFilter(item)}>{item}</button>)
            }
          </div>
          {/* <Search setProducts={SetProducts} /> */}
        </div>
        <div className="products-container">
            {
                products.map(item=><ProductCard key={item.id} product={item} />)
                // products.map(item=><p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default HomePage