import React from "react";
import { useTranslation } from "react-i18next";

import "./project.scss";
import ProjectBase from "../../utils/projects.json";
import ProjectImg from "../../assets/Project.png";
import TikTokPopUp from "./TikTokPopUp"


export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="ProjectsContainer">
      
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1 className="pageTitle">{t("menuAndTitle.Projects")}</h1>
        
        <TikTokPopUp/>
        
      </div>
   
      

      {ProjectBase.map((projects, key) => {
        return (
          <div key={key} className="ProjectCard">
            <img
              src={projects.imageLink}
              alt={projects.alt}
              className="projectImg"
            />

            <br />
            <div className="projectTitle">{projects.ProjectName}</div>
            <div className="ProjectRequirerName">
              {projects.ProjectRequirerName}
              
            </div>
            <div className="ProjcetCreateDate">{projects.CreateDate}</div>
        
            <hr />
            <div className="projectButton">
              <a href={projects.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {projects.LiveDemo !== "" ? 
                <a href={projects.LiveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                </a> : <div style={{fontSize: "14px", color: "green"}}>In progress <img src="./img/progress.gif" alt="progress" style={{width: "20px", height: "20px"}}/></div>
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
