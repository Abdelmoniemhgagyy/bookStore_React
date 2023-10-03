import React from 'react'
import {Link} from "react-router-dom"
function Navbar({toggle,setToggle}) {
  return (
    <nav className='navbar' style={{left:toggle && "0px"}}>
      <ul className='navbar-links'>
        <li onClick={()=> setToggle(false)} className='navbar-link'><Link to="/">Home</Link></li>
        <li onClick={()=> setToggle(false)} className='navbar-link'><Link to="/authors">Authors</Link></li>
        <li onClick={()=> setToggle(false)} className='navbar-link'><Link to="/about">About Us</Link></li>
        <li onClick={()=> setToggle(false)} className='navbar-link'><Link to="/contact">Contact Us</Link></li>
        <li onClick={()=> setToggle(false)} className='navbar-link'><Link to="/register">Register</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar