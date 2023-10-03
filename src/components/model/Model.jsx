import React from 'react'
import "./Model.css"
import Rating from "../bookSlide/Rating"
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from "../../context/cartContext"

function Model({setOpenModel,bookData,openModel}) {
        // const [seemore,setSeemore] =useState(false);

    let closeModel =()=>{
        setOpenModel(false)
    }
    const [quan,setQuan] =useState(1)
    const {Add_item}=useContext(CartContext)
  return (
    <div className='model-container' onClick={()=>setOpenModel(false)}>
        <div className="model-content"  onClick={(e)=> e.stopPropagation()} >
            <i className="bi bi-x-circle" onClick={()=> closeModel()}></i>
            <div className="model-img">
                <img src={`./books/${bookData.image}`} alt="" />
              </div>        
             <div className="model-info">
                <div className="model-book-element"><span>{bookData.title}</span></div>
                <div className="model-book-element"><span>Status : </span>{bookData.inStock ? "In Stock" :"Not In Stock"}</div>
                <div className="model-book-element"><span>Author : </span>{bookData.author}</div>
                <div className="model-book-element"><span>Price : </span>${bookData.price}</div>
               <div className="rating">
               <Rating rating={bookData.rating} reviews={bookData.reviews} /> </div>
               <div className="model-book-cart">
               <input type="number" 
                value={quan}
                onChange={(e)=> setQuan(e.target.value)}/>
                <button onClick={()=>Add_item({...bookData,quantity:quan})}> <i class="bi bi-cart4" ></i> Add To cart</button>
               </div>
               <Link to={`/book/${bookData.id}`} className="model-book-see-more">
                See More
               </Link>

              </div>
             

        </div>
    </div>
  )
}

export default Model