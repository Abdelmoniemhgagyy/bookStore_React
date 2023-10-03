import React from 'react'
import {Link} from "react-router-dom"
function BottomFooter({scrollTop}) {
  return (
    <div className="bottom-footer">
    <div className="bottom-footer-item links">
       <h3> Links</h3>
    <ul className='bottom-footer-item-nav'>
        <li onClick={()=>scrollTop()}><Link to="/">Home</Link></li>
        <li onClick={()=>scrollTop()}><Link to="/authors">Authors</Link></li>
        <li onClick={()=>scrollTop()}><Link to="/about">About Us</Link></li>
        <li onClick={()=>scrollTop()}><Link to="/contact">Contact Us</Link></li>
        <li onClick={()=>scrollTop()}><Link to="/register">Register</Link></li>
  </ul>
    </div>
    <div className="bottom-footer-item contact">
       <h3>Contact</h3>
       <div className='bottom-footer-item-email'>
       <i className="bi bi-envelope"></i>
        <h5><a href="mailto:moniemhgagy@gmail.com?subject=Contact" >moniemhgagy@gmail.com </a></h5>
      </div>
       <div className='bottom-footer-item-phone'>
       <i className="bi bi-telephone-fill"></i>
        <p>01557221816</p>
       </div>
    </div>
    <div className="bottom-footer-item about">
       <h3>About Us</h3>
       <div className='footer-p'>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, optio minima quia laborum corrupti! Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. In</p>
       </div>
    </div>
 </div>
    
  )
}

export default BottomFooter