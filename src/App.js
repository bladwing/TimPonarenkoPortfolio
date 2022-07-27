import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Project, Hobby, Music, Films } from "./components/Pages";
import NotFound from "./components/NotFound/NotFound"
import Experience from "./components/experience/experience";
import Education from "./components/Education"
import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  return (
    <div className="MainPage">
      
      <Router>
      <div className="wrapper Header">
          <h1>Tim Ponarenko</h1>
        </div>
        <Routes>
          
          <Route path="/" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education/>}/>
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
