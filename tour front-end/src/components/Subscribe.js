import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe-container'>
        <div className='subscribe-left'>
            <h2>Subscribe now to get useful traveling information.</h2>
            <div className='subscribe-inputContainer'>
                <input type="text" placeholder='Enter your email...'/>
                <button>subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor fugit sequi ducimus possimus dolores.</p>
        </div>
        <div className='subscribe-right'>
        <img src="/tour-images/male-tourist.png" alt="null"/>
        </div>
    </div>
  )
}

export default Subscribe
