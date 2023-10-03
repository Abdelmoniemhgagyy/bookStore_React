import React from 'react'
import "./contact.css"
function Contact() {
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
            <form action="">
              <div className="contact-form-top">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Subject' />
                <input type="text" placeholder='Email' />
              </div>
              <textarea placeholder='Your Massage'></textarea>
              <button>Send</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact