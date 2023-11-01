import React , {useContext ,useState} from 'react'
import Rating from "../../components/bookSlide/Rating"
import {useParams} from "react-router-dom"
import {books} from "../../data/books"
import "./book.css"
import  CartContext from "../../context/cartContext"
function Book() {
      const [quan,setQuan]=useState(1)
      const {Add_item}=useContext(CartContext)
       const {id}=useParams();
       const book=books.find(b => b.id === +id)
       console.log(book)
  return (
    <div className='book-container'>
        <div className="book-content">
          <div className="book-img">
            <img src={`/books/${book.image}`} alt={book.title} />
          </div>
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>by <span>{book.author}</span> (Author)</p>
            <Rating rating={book.rating} reviews={book.reviews}/>
            <div className="model-book-cart">
                <input type="number" 
                min={0}
                max={100}
                value={quan}
                onChange={(e)=> setQuan(e.target.value)}/>
                <button onClick={()=>Add_item({...book,quantity:quan})}> <i class="bi bi-cart4"></i> Add To cart</button>
               </div> 
          </div>
        </div>
        <p className='description '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dolorum temporibus nesciunt quis, porro architecto magnam perferendis veniam expedita ea mollitia nisi quidem? Tenetur perferendis error, sunt inventore sed unde suscipit necessitatibus, ullam iure fuga adipisci, officiis odio velit at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo at fuga minima officiis rem exercitationem vero earum, suscipit soluta dignissimos cumque optio pariatur facilis quia saepe, numquam iste temporibus reprehenderit vitae incidunt cupiditate quo eveniet. Architecto dignissimos officia.</p>
        <div className="more-inforamtions">
          <div className="more-informations-item">
            <p>Print Length </p>
            <i class="bi bi-file-earmark-break"></i>
            <p>{book.printLength}</p>
          </div>
          <div className="more-informations-item">
            <p>Language</p>
            <i class="bi bi-globe"></i>
            <p>{book.language}</p>
          </div>
          <div className="more-informations-item">
            <p>Publication Date </p>
            <i class="bi bi-calendar3"></i>
            <p>{book.PublicationDate}</p>
          </div>
        </div>
    </div>
    
  )
}

export default Book