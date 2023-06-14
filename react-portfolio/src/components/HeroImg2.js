import "./HeroImg2Styles.css";
import  "../assets/matrix2.mp4";

import React from 'react';

const HeroImg2 = () => {
  return (
   <div className="hero">
   <div className="mask">
      <video loop autoPlay muted id="bg-video">
         <source src={require("../assets/matrix2.mp4")} type="video/mp4" />
      </video>
   </div>
   <div className="content">
      <h1>Projects</h1>
      <p>Some of my recent work</p>
   </div>
 </div>
  )
}

export default HeroImg2;