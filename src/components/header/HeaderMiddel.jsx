import React from 'react'
import {Link} from "react-router-dom"
import CartContext from "../../context/cartContext"
import { useContext } from 'react'

function HeaderMiddel() {
  const {CartLength}=useContext(CartContext)
  return (
    <div className="header-middle">
      <div className="header-middle-logo">
        <b>book</b>
       <Link to="/"><i className="bi bi-book"></i></Link> 
        <b>Store</b>
      </div>
      <div className="header-middle-search-box">
        <input type="text" className="search-box" placeholder='Search ' />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart">
        {CartLength>0&&<b className='cart-notifications'>{CartLength}</b>}
        <i className="bi bi-cart"></i>
      </Link>
    </div>
  )
}

export default HeaderMiddel