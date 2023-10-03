import React,{useState} from 'react'
import "./Register.css"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const[user,setUser]=useState("")
  const[phone,setPhone]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const handelFormSubmit = (e)=>{
      e.preventDefault();
      if(user.trim()==="") return toast.error("Username is Requried")
      if(phone.trim()==="") return toast.error("Phone is Requried")
      if(email.trim()==="") return toast.error("Email is Requried")
      if(password.trim()==="") return toast.error("Password is Requried")
  }
  const [showPassword,setShowPassword]=useState(false)
  const showPass=()=>{
    setShowPassword(prev => !prev)
  }
  return (
    <div className='register-container'>
      <ToastContainer style={{whiteSpace:"nowrap"}}/>
          <h2>Create new account</h2>
    <div className="register-wrapper">
    <div className="register-right"></div>
      <div className="register-items">
      <form className="register-form" onSubmit={(e)=>handelFormSubmit(e)}>
      <input type="text" placeholder='User name' value={user} onChange={(e)=>setUser(e.target.value)} />
      <input type="text" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <div className="show-and-hide-pass">
             <input type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
             {showPassword? <i onClick={()=>showPass()} class="bi bi-eye-slash-fill login-showpass"></i>
             :<i onClick={()=>showPass()} class="bi bi-eye-fill login-showpass"></i> }
             </div>
        <button>Register</button>
        <div className='account'>You have an account ?
          <Link to="/login">Login</Link> </div>
      </form>
    </div>
      </div>
      
  </div>
  )
}

export default Register