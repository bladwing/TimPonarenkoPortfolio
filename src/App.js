import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Project, Experience, Hobby, Music, Films } from "./components/Pages";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  return (
    <div>
    <Router>
      <hr />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/music" element={<Music />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
  
};

export default App;
