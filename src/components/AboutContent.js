import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import React1 from "../assets/react1.png";
import React2 from "../assets/react2.jpeg";

const AboutContentStyles = () => {
  return (
    <div className="about">
      <div className="left">
         <h1>Who am I?</h1>
         <p>I'm a new junior developer with full-stack education.</p>
         <Link to="/contact">
            <button className="btn">Contact</button>
         </Link>
      </div>
      <div className="right">
         <div className="img-container">
            <div className="img-stack top">
               <img src={React1} className="img" alt="react-img" />
            </div>
            <div className="img-stack bottom">
               <img src={React2} className="img" alt="react-img" />
            </div>
         </div>
      </div>
    </div>
  )
}

export default AboutContentStyles;