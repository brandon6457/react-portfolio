import "./HeroImg2Styles.css";
import "../assets/matrix2.mp4";

import React, { Component } from 'react';

class HeroImg2 extends Component {
   render() {
      return (
         <div className="hero">
      <div className="mask">
         <video loop autoPlay muted id="bg-video">
            <source src={require("../assets/matrix2.mp4")} type="video/mp4" />
         </video>
      </div>
      <div className="content">
         <h1>{this.props.heading}</h1>
         <p>{this.props.text}</p>
      </div>
    </div>
      );
   }

}

export default HeroImg2;