import React from 'react'
import "./cart.css"
import OrderSummary from "./OrderSummary"
import CartItem from "./CartItem"
import CartContext from "../../context/cartContext"
import { useContext } from 'react'
function Cart() {

  const {cartItems,Remove_item,Add_item} = useContext(CartContext)
  const totalPrice = cartItems.reduce((acc,cur) => acc + cur.price * cur.quantity , 0 );
  return (
    <div className='cart-container'>
      <div className="cart-wrapper">
          <div className="cart-items">
          <h3 className="cart-title">Your Shoping Title</h3>
        { cartItems.map((item) =>
        <CartItem 
        key={item.id}
        item={item}
        Remove_item={Remove_item}
        Add_item={Add_item}/>
)}
          </div>
      </div>
    <OrderSummary totalPrice={totalPrice.toFixed(2)}/>
    </div>
  )
}

export default Cart