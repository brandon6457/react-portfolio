import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent work" />
      <Footer />
    </div>
  )
}

export default Projects;