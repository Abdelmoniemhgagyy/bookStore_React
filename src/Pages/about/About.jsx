import React from 'react'
import "./about.css"
import image from "./bookbackground.png"
function About() {
  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <div className="about-info">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt qui cumque iste, totam eos recusandae exercitationem dignissimos vitae excepturi. Iusto nesciunt voluptatibus esse hic. Repellat eum itaque molestias atque.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About