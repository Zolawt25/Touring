import React, { useEffect, useState } from 'react'
import { data } from '../assets/data/tour'
import { LocationOnOutlined, Star } from '@mui/icons-material'
import axios, * as others from 'axios';
import Loading from '../components/Loading';

const Tours = () => {
    const [products, setProducts] = useState([])
    const [tourLoading, setTourLoading] = useState(false)
    const [rating, setRating] = useState([])

    useEffect(()=>{
      const fetchData = async()=>{
        try {
          setTourLoading(true)
          const res = await axios.get("http://localhost:5000/products")
          setProducts(res.data.product)
          setTourLoading(false)
        } catch (error) {
          alert("sorry something went wrong")
        }
        
      }
      fetchData()
    },[])
    useEffect(()=>{
      const fetchData = async ()=> {
        let res = await axios.get(`http://localhost:5000/products/tour/comments`)
        setRating(res.data)
      }
      fetchData()
    },[])
    const filterRating = (id)=>{
      let ave = []
      rating.filter((item)=>{
        if(item.commentId === id){
          ave = [...ave, item.rating]
        }
      })
      let average = 0
      if (ave.length === 0) {
        average = 0
      }else{
        for (let index = 0; index < ave.length; index++) {
        let element = ave[index];
        average += element
        }
        average =Number(average / ave.length).toFixed(1)
      }
      return average
    }
  return (
    <div className='tours-container'>
      <div className='tours-title'>
        <p>Explore</p>
        <h2>Our Featured Tours</h2>
      </div>
      <div className='tours-products'>
      {tourLoading && <div className='isLoading'>
          <Loading/>
      </div>}
        {
            products.map((item, index)=>{
                const { title, city, price, reviews, photo, featured } = item
                return (
                    featured && 
                    <div key={item._id} className='tours-productContainer'>
                        <div className='tours-img'>
                            <img src={photo} alt={title} />
                            {featured && <p>Featured</p>}
                        </div>
                        <div className='torus-location'>
                            <p><LocationOnOutlined style={{fontSize: "medium", color: "#faa935"}}/>{city}</p>
                            <p><Star style={{fontSize: "small", color: "#faa935"}}/><span>{filterRating(item._id) === 0 ? "Not rated" : filterRating(item._id)}</span></p>
                        </div>
                        <h6>{title}</h6>
                        <div className='tours-productPrice'>
                          <p><span>${price}</span> /per person</p>
                          <a href={`/tour/${item._id}`}>Book Now</a>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Tours
