import React ,{useState} from 'react'
import "./Slide.css"
import Firstbook from "../../images/book1.png"
import secondbook from "../../images/book2.png"
import thirdbook from "../../images/book3.png"
function Slide() {
const [indexSlide,setIndexSlide]=useState(0);

let handelSlide = (dir)=>{
    if(dir === "left"){
        setIndexSlide( indexSlide - 1)
    }else{
        setIndexSlide( indexSlide + 1)
    }
}
  return (
    <div className="slide-container" >
       {indexSlide !== 0 && <i  onClick={()=> handelSlide("left")} className="bi bi-chevron-double-left arrow-left"></i>} 
        <div className="slide-wrapper" style = {{transform:`translateX(${indexSlide * -100}vw)`}} >
            <div className="slide frist-slide">
                <div className="slide-img-wrapper">
                    <img src={Firstbook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">
                               Book Store
                    </h1>
                    <p className="slide-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime?
                    </p>
                </div>
            </div>
            <div className="slide second-slide">
                <div className="slide-img-wrapper">
                    <img src={secondbook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">
                               The Book for Every One 
                    </h1>
                    <p className="slide-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime?
                    </p>
                </div>
            </div>
            <div className="slide third-slide">
                <div className="slide-img-wrapper">
                    <img src={thirdbook} alt="" />
                </div>
                <div className="slide-info-wrapper">
                    <h1 className="slide-info-title">
                              Check Out The New Tittles
                    </h1>
                    <p className="slide-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime?
                    </p>
                </div>
            </div>
        </div>
        {indexSlide !== 2 && <i  onClick={()=> handelSlide("right")} className="bi bi-chevron-double-right arrow-right"></i>}
        
    </div>
  )
}

export default Slide