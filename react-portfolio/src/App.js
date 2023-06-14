import React from "react";
import "./index.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import CV from "./routes/CV";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
    </>
  );
}

export default App;
