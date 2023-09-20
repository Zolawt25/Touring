import React from 'react'

const Experience = () => {
  return (
    <div className='experience-container'>
      <div className='experience-left'>
        <p className='experience-title'>Experience</p>
        <h2>With our experience we will serve you</h2>
        <p className='experience-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ut velit similique voluptates.</p>
        <div className='experience-success'>
            <div className='experience-div'>
                <span>12K+</span>
                <p>Successful trip</p>
            </div>
            <div className='experience-div'>
                <span>2K+</span>
                <p>Regular clients</p>
            </div>
            <div className='experience-div'>
                <span>15+</span>
                <p>Years Experience</p> 
            </div>
        </div>
      </div>
      <div className='experience-right'>
        <img src="/tour-images/experience.png" alt="experience.png" />
      </div>
    </div>
  )
}

export default Experience
