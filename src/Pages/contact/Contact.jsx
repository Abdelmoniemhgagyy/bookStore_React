import React from 'react'
import "./contact.css"
import Animation from "./animation_lo14clnl.json"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react"
function Contact() {
  const [state, handleSubmit] = useForm("xaygvnrz");

  return (
    <div className='contact-container'>
      <div className="contact-wrapper">
        <div className="contact-top">
        <div className="contact-top-item">
              <i class="bi bi-person-circle"></i>
              {/* <i class="bi bi-person-fill"></i> */}
                <h2>name</h2>
                <p>Abdelmoniem Ahmed</p>
              </div>
              <div className="contact-top-item">
              <i class="bi bi-telephone-fill"></i>
                <h2>Phone</h2>
                <p>01557221816</p>
              </div>
              <div className="contact-top-item">
              <i class="bi bi-envelope-fill"></i>
                <h2>Email</h2>
                <p>moniemhgagy@gmail.com</p>
              </div>
            
        </div>
        <div className="contact-bottom">
            <h3>Contact Us From</h3>
            <form action="" onSubmit={handleSubmit}>
              <div className="contact-form-top">
                <input type="text" placeholder='Name' name='name' />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                <input type="text" placeholder='Subject' name="subject"/>
                <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                  />
                <input type="email" placeholder='Email' name='email'/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
              </div>
              <textarea placeholder='Your Massage'  name="message"></textarea>
              <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              <button type="submit" disabled={state.succeeded}>Send</button>
              {state.succeeded &&<div className='animation-div'><Lottie animationData={Animation} style={{height:40}} loop={2} ></Lottie> <span className='succeeded_message'>succeeded Message</span></div> }
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact