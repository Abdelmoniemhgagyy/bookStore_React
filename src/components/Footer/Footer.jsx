import React from 'react'
import Topfooter from "./Topfooter"
import Bottomfooter from "./Bottomfooter"
import "./Footer.css"
function Footer() {
  const scrollTop =()=>{
    window.scroll({
      top:0,
      behavior:'smooth',
    })
  }
  return (
    <div className='footer'>
    <Topfooter/>
    <Bottomfooter scrollTop={scrollTop}/>
    </div>
  )
}

export default Footer