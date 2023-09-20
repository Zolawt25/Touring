import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchContainer from "../components/SearchContainer"
import { LocationOnOutlined, Star } from '@mui/icons-material'
import Subscribe from '../components/Subscribe'
import Footer from "../components/Footer";
import axios, * as others from 'axios';
import { useLocation } from 'react-router-dom'
import Loading from '../components/Loading';

const SearchPage = () => {
  const [products, setProducts] = useState([])
  const location = useLocation().search
  const [tourLoading, setTourLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setTourLoading(true)
        const res = await axios.get(`http://localhost:5000/products${location}`)
        setProducts(res.data.product)
        setTourLoading(false)
      } catch (error) {
        alert("sorry something went wrong")
      }
      
    }
    fetchData()
  },[location])
  return (
    <div>
      <Navbar/>
      <div className='tourPage-title'>
        <p>Tour</p>
      </div>
      <SearchContainer/>
      <div className='toursPage-products'>
        {tourLoading && <div className='isLoading'>
            <Loading/>
        </div>}
        {
            products.map((item, index)=>{
                const { title, city, price, reviews, photo, featured } = item
                return (
                      <a href={`/tour/${item._id}`} key={index} className='toursPage-productContainer'>
                          <div className='tours-img'>
                              <img src={photo} alt={title} />
                              {featured && <p style={{color: "#fff"}}>Featured</p>}
                          </div>
                          <div className='torus-location'>
                              <p><LocationOnOutlined style={{fontSize: "medium", color: "#faa935"}}/>{city}</p>
                              <p><Star style={{fontSize: "small", color: "#faa935"}}/><span>{reviews.rating}</span></p>
                          </div>
                          <h6>{title}</h6>
                          <div className='tours-productPrice'>
                            <p><span>${price}</span> /per person</p>
                            <a href={`/tour/${item._id}`}>Book Now</a>
                          </div>
                      </a> 
                )
            })
        }
        {tourLoading || products.length === 0 && <h2>No Search Results: {location.split("=")[1]}</h2>}
      </div>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default SearchPage
