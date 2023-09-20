import React from 'react'
// import video from "../assets/images/hero-video.mp4"

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <div className='header-cursiveContainer'>
             <h2 className='header-cursive'>Know Before You Go</h2>
             <img src="/tour-images/world.png" alt="world." className='header-logo'/>
        </div>
        <div className='header-title'>
            <h1>Travling opens the door to creating <span>memories</span></h1>
        </div>
        <div className='header-disc'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in animi tempore </p> <p> numquam velit aliquam porro rerum quam eligendi officia sint, suscipit </p> <p> reprehenderit voluptatibus voluptates provident laudantium exercitationem iste.</p>
        </div>
      </div>
      <div className='header-right'>
        <img src="/tour-images/hero-img01.jpg" alt="null" className='header-img'/>
        <img src="/tour-images/tour-img01.jpg" alt="null" className='header-img2'/>
        <img src="/tour-images/hero-img02.jpg" alt="null" className='header-img3'/>
        {/* <img src="" alt="" />
        <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default Header
