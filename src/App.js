import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Project, Hobby, Music, Films, NotFound } from "./components/Pages";
import Experience from "./components/experience/experience";
import Main from "./components/main/MainPage";
import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  return (
    <div className="MainPage">
      
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/music" element={<Music />} />
          <Route path="/films" element={<Films />} />
          <Route path="*" element={<NotFound/>} status={404} />
        </Routes>
      </Router>
      </div>
 
  );
};

export default App;
