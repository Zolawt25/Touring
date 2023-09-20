import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import jwtDecode from 'jwt-decode';
import Cookie from "universal-cookie"

const Navbar = () => {
  const decode = document.cookie ? jwtDecode(document.cookie.split("=")[1]) : ""
  const cookie = new Cookie() 
  const [nav, setNav] = useState(false)

  const handleLogout = ()=>{
    cookie.remove("token")
    window.location.reload()
  }
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <a href="/">
         <img src="./tour-images/logo.png" alt="" />
        </a>
      </div>
      <div className='nav-center' style={{top: `${nav? "57px" : "-200px"}`}}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#footer">About</a></li>
            <li><a href="/tours">Tour</a></li>
        </ul>
      </div>
      <div className='nav-right'>
        { document.cookie ? <div className='nav-rightDiv'><button className='nav-register' onClick={()=> handleLogout()}>Logout</button> <img src="/tour-images/user.png" alt="null" className='nav-png'/><p> {decode.name}</p></div> :
        <div className='nav-right'>
          <a href='/login' className='nav-login'>Login</a>
          <a href='/register' className='nav-register'>Register</a>
        </div>
        
        }
        <span onClick={()=> setNav(!nav)}><MenuIcon/></span>
      </div>
    </div>
  )
}

export default Navbar
