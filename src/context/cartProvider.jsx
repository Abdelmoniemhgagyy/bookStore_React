import React, { useState } from 'react';
import CartContext from "./cartContext"
function CartProvider({children}) {

    const [cartItems,setCartItems] = useState([])
    // ----add_Items----
    const Add_item =(item)=>{
       
        if(cartItems.find((cart)=> item.id === cart.id)){
          setCartItems(cartItems.map((cartitem)=> cartitem.id===item.id ? item : cartitem))
        }else{
          setCartItems(prev => [...prev,item])
        }

      
    }
    //----remove_item------
    const Remove_item =(id)=>{
        const cart =cartItems.filter((e)=>e.id !== id )
        setCartItems(cart)
    }
  return (
    <CartContext.Provider value = {
        {cartItems,
        Add_item,
        Remove_item,
        CartLength : cartItems.length}}>
            {children}
    </CartContext.Provider>
    
  )
}

export default CartProvider