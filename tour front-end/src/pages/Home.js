import React from 'react'
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchContainer from "../components/SearchContainer";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Tours from "../components/Tours";

const Home = () => {
  return (
    <div>
       <Navbar/>
      <Header/>
      <SearchContainer/>
      <Service/>
      <Tours/>
      <Experience/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
