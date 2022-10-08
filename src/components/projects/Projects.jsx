import React from "react";
import { useTranslation } from "react-i18next";

import "./project.scss";
import ProjectBase from "../../utils/projects.json";
import ProjectImg from "../../assets/Project.png";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="ProjectsContainer">
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1 className="pageTitle">{t("menuAndTitle.Projects")}</h1>
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
            <div className="ProjectRequirerName">{projects.ProjectRequirerName}</div>
            <hr />
            <div className="projectButton">
              <a href={projects.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={projects.LiveDemo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
