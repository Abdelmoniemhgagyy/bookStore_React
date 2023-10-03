import React from 'react'
import {Link} from "react-router-dom"
function HeaderTop({setToggle,toggle}) {
  return (
   <div className="header-top">
      <div className="header-top-menu" onClick={()=> setToggle((e)=> !e)}>
      {toggle ? <i className="bi bi-x-lg" style={{color:"black"}}></i> : <i className="bi bi-list" ></i>}
        </div>
        <div className="header-phone">
        <i className="bi bi-phone"></i>
          01557221816
        </div>
        <div className="header-text">
          Welcome To Book Store
        </div>
        <div className="header-login">
          <Link to="/login" ><i className="bi bi-person-fill"></i> Login</Link>
        </div>
    </div>
     
  )
}

export default HeaderTop