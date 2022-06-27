import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {MainMenu, SubMenu }from "./components/Menu";


import Tim from "./resourse/Tim.jpg";
import ProjectImg from "./resourse/Project.png";
import HobbyImg from "./resourse/hobby.jpg";
import MusicImg from "./resourse/music.png";
import FilmsImg from "./resourse/films.jpg";



import "./App.scss";

const App = () => {
  return (
    <Router>
       <hr/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/music" element={<Music />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
  );
};

function Main() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={Tim} alt="profilePhoto" />

        <h1 className="Header">Tim Ponarenko</h1>
      </div>

      <MainMenu />

      <div className="Content">
        <div> Born : 1991</div>
        <div> Country : Georgia</div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1>პროექტები</h1>
      </div>

      <MainMenu />

      <div className="Content">

      </div>

    </div>
  );
}
function Hobby() {
  return (
    <div>
     
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={HobbyImg} alt="profilePhoto" />
        <h1>ჰობი</h1>
      </div>

      <MainMenu />
      <SubMenu/>
      <div className="Content">
     
      </div>
      <div>
        
      </div>
    </div>
  );
}

function Music() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={MusicImg} alt="profilePhoto" />
        <h1>მუსიკა</h1>
      </div>

      <MainMenu />

    </div>
  );
}
function Films() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={FilmsImg} alt="profilePhoto" />
        <h1>მუსიკა</h1>
      </div>

      <MainMenu />

    </div>
  );
}
export default App;
