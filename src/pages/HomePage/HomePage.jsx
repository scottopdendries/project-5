import React, {useEffect, useState, useContext} from 'react'
import './HomePage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ThemeContext } from '../../contexts/ThemeContext'

function HomePage() {

  // Global state
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  // Uses state to store products
  const [products, setProducts] = useState([])

  // Retrieves API data when the page loads
  useEffect(
    ()=>{
      console.log('homepage loaded')
        // API call
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>{
          console.log(res.data)
          // Stores data in state
          setProducts(res.data)
          }
          )
          .catch(err => console.log(err))
      }, []  // Runs only once when page loads
    )
  
    // const [filter, setFilter] = useState('All')

    const filters = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]

    // Filter
    const changeFilter = (filter) => {
      console.log('Button clicked:', filter);
    
      const filterUrls = {
        Electronics: 'https://fakestoreapi.com/products/category/electronics',
        Jewelery: 'https://fakestoreapi.com/products/category/jewelery',
        "Men's Clothing": 'https://fakestoreapi.com/products/category/men%27s%20clothing',
        "Women's Clothing": 'https://fakestoreapi.com/products/category/women%27s%20clothing',
        default: 'https://fakestoreapi.com/products'
      };
      const url = filterUrls[filter] || filterUrls.default;
    
      axios.get(url)
        .then(res => {
          setProducts(res.data);
          // setFilter(filter);
        })
        .catch(err => console.log(err));
    }

  return(
    <div className={darkMode?"home-container home-dark" : "home-container"}>
        <div className ="filter-container">
          {filters.map((item)=>(
            <button key={item} onClick={ ()=> changeFilter(item)}> 
              {item}
            </button>
          ))}
        </div>
      <div className="products-container">
        {products?.map((item)=>(
          < ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage