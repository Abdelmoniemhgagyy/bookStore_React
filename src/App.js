import React from 'react'
import Home from "./Pages/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/header/Header"
import About from "./Pages/about/About.jsx"
import Authors from "./Pages/Authors/Authors.jsx"
import Contact from "./Pages/contact/Contact.jsx"
import Cart from "./Pages/cart/cart.jsx"
import Register from "./Pages/form/Register.jsx"
import Login from "./Pages/form/Login.jsx"
import Book from "./Pages/book/book.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/book/:id" element={<Book/>}/>
        </Routes> 
         <Footer/>
    </BrowserRouter>
  )
}

export default App