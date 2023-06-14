import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <img className="intro-img" src= {IntroImg} alt="IntroImg" />
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