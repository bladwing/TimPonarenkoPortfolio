import React from "react";
import { MainMenu, SubMenu } from "./Menu";
import Projects from "./projects/Projects";
import MusicPage from "./hobby/Music";
import Film from "./hobby/Film";

import ProjectImg from "../assets/Project.png";
import HobbyImg from "../assets/hobby.jpg";
import MusicImg from "../assets/music.png";
import FilmsImg from "../assets/films.jpg";
import ExperienceImg from "../assets/experience.png";



export function Project() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1>პროექტები</h1>
      </div>

      <MainMenu />
      <div className="Content">
        <Projects />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ExperienceImg} alt="profilePhoto" />
        <h1>გამოცდილება</h1>
      </div>

      <MainMenu />
      <div className="Content"></div>
    </div>
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
      <div className="Content"></div>
      <div></div>
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
