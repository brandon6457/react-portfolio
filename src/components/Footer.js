import "./FooterStyles.css";
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
            <div className="location">
               <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
               <div>
                  <p>Lakeland, Florida</p>
                  <p>United States</p>
               </div>
            </div>
            <div className="phone">
               <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            1-863-583-2293</h4>
            </div>
            <div className="email">
               <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            brandon6457@gmail.com</h4>
            </div>
         </div>
         <div className="right">
            <h4>About Me</h4>
            <p>I am a new junior developer looking to improve my skills, and continue learning new languages. Feel free to contact me via email or text, and be sure to checkout my Github to see my progress through school, and be sure to follow me on Linkedin.</p>
            <div className="social">
            <BsGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>
         </div>
      </div>
    </div>
  );
};

export default Footer