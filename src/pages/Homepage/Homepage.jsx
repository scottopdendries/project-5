import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import Search from '../../components/Search/Search'

function HomePage() {

  // Uses state to store products
  const[products, setProducts] = useState([])

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
  
    const [filter, setFilter] = useState('All')

    const filters = ["All", "Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]

    // Filter
    const changeFilter = (filter) => {
      console.log('Button clicked:', filter);

      let url;
      switch (filter) {
        case 'Electronics':
          url = 'https://fakestoreapi.com/products/category/electronics';
          break;
        case 'Jewelery':
          url = 'https://fakestoreapi.com/products/category/jewelery';
          break;
        case "Men's Clothing":
          url = 'https://fakestoreapi.com/products/category/men%27s%20clothing';
          break;
        case "Women's Clothing":
          url = 'https://fakestoreapi.com/products/category/women%27s%20clothing';
          break;
        default:
          url = 'https://fakestoreapi.com/products';
      }
      axios.get(url)
        .then(res => {
          setProducts(res.data);
          setFilter(filter);
        })
        .catch(err => console.log(err));
    }

  return(
    <div className="home-container">
      <div className="filter-and-search">
        <div className ="filter-container">
          {filters.map((item)=>(
            <button key={item} onClick={ ()=> changeFilter(item)}> 
              {item}
            </button>
          ))}
        </div>
        <Search setProducts={setProducts} />
      </div>
      <div className="products-container">
        {products.map((item)=>(
          < ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage