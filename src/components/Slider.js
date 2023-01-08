import React from 'react';
import Data from './Sliderdata';
import "./Slider.css";

export default function Slider (props){
const slides = Data.map((data, index) =>{
    return(
        <div className="slide" key="index">
            <img src={data.src}  alt={data.alt} />
        </div>
    )  
})

const style ={
    width : `${Data.length*100}%` , // SINCE 5 IMAGES WE ARE HAVING SO WIDTH = 5*100 = 500%
    transform : `translateX(-${props.currentIndex*(100/Data.length)}%)` 
}

return(
    <div className="slider" style={style}>
       {/* <h1>Slides</h1>  */}
       {slides}
    </div>
)
}


//current index value base panni namma slider r move panna porom
 