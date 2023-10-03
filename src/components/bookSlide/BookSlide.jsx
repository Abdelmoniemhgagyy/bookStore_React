import React, { useEffect, useState,useContext } from 'react'
import "./BookSlide.css"
import Rating from "./Rating"
import Model from "../model/Model"
import CartContext from "../../context/cartContext"
function BookSlide({data}) {

    const[slideIndex,setSlideIndex]=useState(0);
    const[openModel,setOpenModel]=useState(false)
    const[bookData,setBookData]=useState(null)

   let  handleIndex = (dir)=>{
        if(dir==="left"){
            setSlideIndex(slideIndex >=1 ? slideIndex - 1 :6)
        }else{
            setSlideIndex( slideIndex <=5 ? slideIndex + 1 : 0) 
        }
    }

    let handelModel = (book)=>{
        setOpenModel(true);
        setBookData(book); 
    }
    const {Add_item}=useContext(CartContext)
    return (
    <div className='book-slide-container'>
        <i className="bi bi-chevron-left" onClick={()=>handleIndex("left")}></i>
        <div className="book-slide-wrapper" style={{transform:`translateX(${slideIndex * -200}px)`}}>
        {data.map( item => 
            <div key={item.id} className='book-slide-item'>
                <img src={`/books/${item.image}`} alt={item.title} className="book-slide-img" onClick={() => handelModel(item)} />
                <h3 className="book-slide-item-title">{item.title}</h3>
                <div className="book-slide-content">
                <Rating rating={item.rating} reviews={item.reviews}/>
                <div className="book-slide-item-price"  onClick={()=>Add_item({...item,quantity:1})}>${item.price}</div>
                <div className="book-slide-item-icons">
                    <i className="bi bi-eye-fill" onClick={() => handelModel(item)} ></i>
                    <i onClick={()=>Add_item({...item,quantity:1})} className="bi bi-cart-plus"></i>
                </div>
                </div>
            </div>
        )}
        </div>
        <i className="bi bi-chevron-right" onClick={()=>handleIndex("right")}></i>
        { openModel && <Model setOpenModel={setOpenModel} bookData={bookData} openModel={openModel}/>}

    </div>
    
  )
}

export default BookSlide