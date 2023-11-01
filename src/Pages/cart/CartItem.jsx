import React from 'react'

function CartItem({item,Add_item,Remove_item}) {
    const {image,title,author,quantity,price,id}=item;
  return (
    <div className="cart-item"> 
    <div className="cart-content">
        <img src={`/books/${image}`} alt={title} />
          <div className="cart-info">
            <b>Title : </b>{title}<br/>
            <b>Authors : </b>{author}
            <div className="cart-counter">
                   <button onClick={()=> Add_item({...item,quantity:item.quantity + 1})} disabled={item.quantity>=100}>
                   <i class="bi bi-plus"></i>
                   </button>
                    <span>{quantity}</span>
                    
                    <button onClick={()=> Add_item(quantity>0 ?{...item,quantity:item.quantity - 1}:{...item,quantity:item.quantity} )}>
                   <i class="bi bi-dash"></i>
                    </button>
                    <div className="cart-price">
                    ${(quantity * price).toFixed(2)}
                    </div>
             </div>
             <div className="cart-remove" onClick={()=>Remove_item(id)}>
             <i class="bi bi-trash3"></i>
             </div>
         </div>
  
    </div>
   
    </div>
  )
}

export default CartItem