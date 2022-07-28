import React from "react";
import Projects from "./projects/Projects";

import ProjectImg from "../assets/Project.png";

export function Project() {
  return (
    <span>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
      <h1 className="pageTitle">პროექტები</h1>
      
      </div>
  
      <Projects />
    </span>
  );
}
