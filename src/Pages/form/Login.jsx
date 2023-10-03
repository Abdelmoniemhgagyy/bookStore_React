import React,{useState} from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [showPassword,setShowPassword]=useState(false)

  const handelFormSubmit = (e)=>{
      e.preventDefault();
      if(email.trim()==="") return toast.error("Email is Requried")
      if(password.trim()==="") return toast.error("Password is Requried")
       console.log(email)
  }

  // ------------show password------------
  const showPass=()=>{
    setShowPassword(prev => !prev)
  }
  return (
    <div className='login-container'>
      <ToastContainer theme="colored" style={{whiteSpace:"nowrap"}}/>
        <h2>Welcome</h2>
      <div className="login-wrapper">
    <div className="login-left"></div>
        <div className="login-items">
          
            <form onSubmit={(e)=> handelFormSubmit(e)} className="login-form">
             <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
             <div className="show-and-hide-pass">
             <input type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
             {showPassword? <i onClick={()=>showPass()} class="bi bi-eye-slash-fill showpassword"></i>
             :<i onClick={()=>showPass()} class="bi bi-eye-fill showpassword"></i> }
             </div>
            
             <button>Login</button>
             <div className='no-account'>Don't have an account ?
                <Link to="/register">Register</Link> </div>
        </form>
      </div>
        </div>
        
    </div>
  )
}

export default Login