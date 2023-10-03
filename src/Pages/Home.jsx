import React from 'react'
import {books as data} from "../data/books"
import {books} from "../data/booksSeller"

import Slide from "../components/slide/Slide.jsx"
import Services from "../components/Services/services.jsx"
import BookSlide from "../components/bookSlide/BookSlide.jsx"
import GroupTitle from "../components/bookSlide/GroupTitle.jsx"

function Home() {
  return (
    <div>
        
         <Slide/>
         <Services/>
         <GroupTitle title="Most common"/>
         <BookSlide data={data}/>
         <GroupTitle title="Best seller"/>
         <BookSlide data={books}/>
         <GroupTitle title="Most wished for"/>
         <BookSlide data={data}/>
    </div>
  )
}

export default Home