import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Project, Experience, Hobby, Music, Films } from "./components/Pages";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  return (
    <div className="MainPage rainbow">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/music" element={<Music />} />
          <Route path="/films" element={<Films />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
