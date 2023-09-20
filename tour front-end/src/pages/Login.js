import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios, * as others from 'axios';
import Cookie from "universal-cookie"
import { useNavigate } from 'react-router-dom';
import RegLoading from '../components/RegLoading';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const cookie = new Cookie()
  const navigate = useNavigate()

  const handleSubmit = async()=>{
    try {
      setIsLoading(true)
      const res = await axios.post("http://localhost:5000/user/login" , { email, password })
      cookie.set("token", res.data.token)
      setIsLoading(false)
      navigate("/")
    } catch (error) {
      setIsLoading(true)
      setEmailErr(error.response.data.email)
      setPasswordErr(error.response.data.password)
      setIsLoading(false)
    }
  }
  return (
    <div>
      <Navbar/>
      <div className='login-container'>
        <div className='login-wrapper'>
            <div className='login-img'>
            <img src="/tour-images/login.png" alt="null"/>
            </div>
            <div className='login-form'>
                <div className='login-formImg'>
                    <img src="/tour-images/user.png" alt="null"/>
                </div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Enter your email...' onChange={(e)=> setEmail(e.target.value)}/>
                    {emailErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{emailErr} </p>}
                    <input type="password" placeholder='Enter your password...' onChange={(e)=> setPassword(e.target.value)}/>
                    {passwordErr && <p style={{color: "red", fontSize: "12px", marginBottom: "10px"}}>{passwordErr} </p>}
                    <button type='button' onClick={handleSubmit}>{isLoading ? <RegLoading/> : "Login"}</button>                    <p>Don't have an account? <a href="/register">Register</a></p>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

