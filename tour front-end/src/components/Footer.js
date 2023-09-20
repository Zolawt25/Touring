import { Facebook, GitHub, Instagram, YouTube } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
      <div className='footer-logo'>
        <img src="./tour-images/logo.png" alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, minus.</p>
        <div className='footer-logoIcons'>
            <YouTube style={{fontSize: "medium", color: "#333"}}/>
            <GitHub style={{fontSize: "medium", color: "#333"}}/>
            <Facebook style={{fontSize: "medium", color: "#333"}}/>
            <Instagram style={{fontSize: "medium", color: "#333"}}/>
        </div>
      </div>
      <div className='footer-discover'>
        <h3>Discover</h3>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/tours">Tour</a>
      </div>
      <div className='footer-links'>
        <h3>Quick links</h3>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <div className='footer-contact'>
        <h3>Contact</h3>
        <p><span>Address: </span>Addis Abeba/ Ethiopia</p>
        <p><span>Email: </span>zelalem2525@gmail.com</p>
        <p><span>Phone: </span>+2510987654321</p>
      </div>
    </div>
  )
}

export default Footer
