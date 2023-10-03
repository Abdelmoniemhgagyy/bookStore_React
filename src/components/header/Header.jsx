import React, { useState } from 'react'
import "./Header.css"
import HeaderTop from "./HeaderTop"
import HeaderMiddel from "./HeaderMiddel"
import Navbar from "./Navbar"
function Header() {
let [toggle,setToggle]=useState(false)
  return (
   <header className="header">
    <div className='container'>
      <HeaderTop setToggle={setToggle}  toggle={toggle}/>
      <HeaderMiddel/>
    </div>
    <Navbar toggle={toggle} setToggle={setToggle}/>
    
   </header>
  )
}

export default Header