import React from 'react'
import './Services.css'
import Services_Data from '../../assets/services_data.js'
import arrow from '../../assets/arrow.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <svg width="180" height="70" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg"> <path d="M0 30 Q30 0 150 15 Q30 60 0 30" fill="rgb(255, 127, 80)"/></svg>
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow} />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services