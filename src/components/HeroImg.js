import "./HeroImgStyles.css";
import React from 'react';
import  "../assets/matrix.mp4";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <video loop autoPlay muted id="bg-video">
            <source src={require("../assets/matrix.mp4")} type="video/mp4" />
         </video>
      </div>
      <div className="content">
         <p>Hi, My name is Brandon</p>
         <h1>Student Developer</h1>
         <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
         </div>
      </div>
    </div>
  )
}

export default HeroImg;