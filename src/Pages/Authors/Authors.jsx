import React from 'react'
import {authors} from "../../data/authors"
import "./authors.css"
import { useState } from 'react'
function Authors() {
  const [state,setState]=useState("")
  
  return (
    <div className='authors-container'>
      <div className="authors-wrapper">
        <div className="authors-search">
            <input type="text" placeholder='Search In Authors'
            value={state}
            onChange={(e)=> setState(e.target.value)} />
        </div>
        <div className="authors-items">
          {authors.filter((e)=> e.name.toLowerCase().includes(state))
          .map((item)=> 
          <div className="authors-item" key={item.id}>
            <div className="content-item">
              <img src={item.image} alt={item.name} />
              <h3 className="author-name">{item.name}</h3>
            </div>
          </div>
          
          )}
        </div>
        
      
        
      </div>

    </div>
  )
}

export default Authors