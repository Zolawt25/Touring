import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios, * as others from 'axios';
import Cookie from "universal-cookie"
import { useNavigate } from 'react-router-dom';
import RegLoading from '../components/RegLoading';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [emailErr, setEmailErr] = useState("")
  const [nameErr, setNameErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const cookie = new Cookie()
  const navigate = useNavigate()

  const handleSubmit = async()=>{
    try {
      setIsLoading(true)
      const res = await axios.post("http://localhost:5000/user/register" , {username: name, email, password})
      cookie.set("token", res.data.token)
      setIsLoading(false)
      navigate("/")
    } catch (error) {
      setIsLoading(true)
      !name ? setNameErr(true) : setNameErr(false)
      !password ? setPasswordErr(true) : setPasswordErr(false)
      email ? setEmailErr(error.response.data.email) : setEmailErr("you must provide email")
      setIsLoading(false)
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='login-container'>
        <div className='login-wrapper'>
            <div className='login-img'>
            <img src="/tour-images/register.png" alt="null"/>
            </div>
            <div className='login-form'>
                <div className='login-formImg'>
                    <img src="/tour-images/user.png" alt="null"/>
                </div>
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder='Enter your username...' onChange={(e)=> setName(e.target.value)} required/>
                    {nameErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}> you must provide name</p>}
                    <input type="email" placeholder='Enter your email...' onChange={(e)=> setEmail(e.target.value)} required/>
                    {emailErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{emailErr} </p>}
                    <input type="password" placeholder='Enter your password...' onChange={(e)=> setPassword(e.target.value)} required/>
                    {passwordErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}> you must provide password</p>}
                    <button type='button' onClick={handleSubmit}>{isLoading ? <RegLoading/> : "Register"}</button>
                    <p>I have an account <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
