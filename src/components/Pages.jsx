import React from "react";
import { MainMenu, SubMenu } from "./Menu";
import Projects from "./PagesData/Projects";
import MusicPage from "./PagesData/MusicPage";
import Film from "./PagesData/Film";


import Tim from "../resourse/Tim.jpg";
import Georgia from "../resourse/georgia.png";
import ProjectImg from "../resourse/Project.png";
import HobbyImg from "../resourse/hobby.jpg";
import MusicImg from "../resourse/music.png";
import FilmsImg from "../resourse/films.jpg";
import ExperienceImg from "../resourse/experience.png";

export function Main() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={Tim} alt="profilePhoto" />

        <h1 className="Header">Tim Ponarenko</h1>
      </div>

      <MainMenu />

      <div className="Content">
        <div> Born : 1991</div>
        <div>
          {" "}
          Country : Georgia{" "}
          <img src={Georgia} className="geoFlag" alt="georgia_flag" />
        </div>
        <div>აქ იქნება ინფორმაცია...</div>
      </div>
    </div>
  );
}

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
      <div className="Content">
       
      </div>
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
   <MusicPage/>
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
      <Film/>
    </div>
  );
}
