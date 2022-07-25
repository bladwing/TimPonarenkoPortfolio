import React from "react";
import { MainMenu, SubMenu } from "./Menu";
import Projects from "./projects/Projects";
import MusicPage from "./hobby/Music";
import Film from "./hobby/Film";

import ProjectImg from "../assets/Project.png";
import HobbyImg from "../assets/hobby.jpg";
import MusicImg from "../assets/music.png";
import FilmsImg from "../assets/films.jpg";

export function Project() {
  return (
    <span>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1>პროექტები</h1>
      </div>
      <MainMenu />
      <Projects />
    </span>
  );
}
export function Hobby() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={HobbyImg} alt="profilePhoto" />
        <h1>ჰობი</h1>
      </div>

      <MainMenu />
      <SubMenu />
    </div>
  );
}
export function Music() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={MusicImg} alt="profilePhoto" />
        <h1>მუსიკა</h1>
      </div>

      <MainMenu />
      <SubMenu />
      <MusicPage />
    </div>
  );
}
export function Films() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={FilmsImg} alt="profilePhoto" />
        <h1>მუსიკა</h1>
      </div>

      <MainMenu />
      <SubMenu />
      <Film />
    </div>
  );
}

export function NotFound() {
  return (
    <div>
      <h1>Page Not found - 404</h1>
    </div>
  );
}
