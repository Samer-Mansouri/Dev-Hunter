import React from 'react'
import banner from '../Assets/Images/banner.jpg';

function Banner() {
  return (
    <div className="content">
        <div className='banner'>
        <img src={banner} alt="banner" className="w-100"/>
        </div>
    </div>                                                    
  )
}

export default Banner