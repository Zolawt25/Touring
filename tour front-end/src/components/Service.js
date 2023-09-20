import { Fingerprint, Settings, WbSunnyOutlined } from '@mui/icons-material'
import React from 'react'

const Service = () => {
  return (
    <div className='service-container'>
      <div className='service-title'>
        <h5>what we serve</h5>
        <h1>we offer our best services </h1>
      </div>
      <div className='service-desc'>
        <div className='service-border'>
            <div className='service-icon'><WbSunnyOutlined/></div>
        <h5>Calculated Weather</h5>
        <p>Lorem ipsum dolor sit amet consect adipisicing elit.</p>
        </div>
      </div>
      <div className='service-desc'>
      <div className='service-border'>
        <div className='service-icon'><Fingerprint/></div>
        <h5>Best Tour Guide</h5>
        <p>Lorem ipsum dolor sit amet consect adipisicing elit.</p>
        </div>
      </div>
      <div className='service-desc'>
      <div className='service-border'>
        <div className='service-icon'><Settings/></div>
        <h5>Customiziation</h5>
        <p>Lorem ipsum dolor sit amet consect adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
