import React from 'react'

function OrderSummary({totalPrice}) {
  return (
    <div className="cart-order-summary">
    <h2 className="order-summary-title">Order Summary</h2>
    <div className="order-summary-item">
     <span>SubTotal </span>
     <span>{totalPrice}</span>
    </div>
    <div className="order-summary-item">
     <span>Shopping Cost </span>
     <span>0</span>
    </div>
    <div className="order-summary-item">
     <span>Discount</span>
     <span>0</span>
    </div>
    <div className="order-summary-item">
     <b>Total</b>
     <span>{totalPrice}</span>
    </div>
   </div>
  )
}

export default OrderSummary