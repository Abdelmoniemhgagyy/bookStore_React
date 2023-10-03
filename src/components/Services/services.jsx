import React from 'react'
import "./services.css"
import {Link} from "react-router-dom"


function services() {
  return (
    <div className='services'>
      <div className="service-item">
        <i className="bi bi-truck"></i>
        <b>Free shoping</b>
      </div>
      <div className="service-item">
        <i className="bi bi-gift"></i>
        <b>Gift Card</b>
        </div>
      <div className="service-item">
        <i className="bi bi-arrow-counterclockwise"></i>
        <b>7 days Return</b>
        </div>
      <Link to="/contact" className="service-item">
        <i className="bi bi-send"></i>
        <b>Contact us </b>
        </Link>
 
      </div>
  )
}

export default services