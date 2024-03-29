import React from "react";
import { useTranslation } from "react-i18next";

import "./project.scss";
import ProjectBase from "../../utils/projects.json";
import ProjectImg from "../../assets/Project.png";
import TikTokPopUp from "../tiktokpopup/TikTokPopUp";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="ProjectsContainer">
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ProjectImg} alt="profilePhoto" />
        <h1 className="pageTitle">{t("menuAndTitle.Projects")}</h1>

        <TikTokPopUp />
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
            <div className="techIconContainer">
              {projects.technology5 === "mongo" ? (
                <img
                  src="./img/mongo.png"
                  alt="mongo"
                  style={{ width: "20px" }}
                  className="ProjectTechIcon"
                />
              ) : (
                ""
              )}
              {projects.technology4 === "express" ? (
                <img
                  src="./img/express.png"
                  alt="express"
                  style={{ width: "20px" }}
                  className="ProjectTechIcon"
                />
              ) : (
                ""
              )}
              {projects.technology2 === "react" ? (
                <img
                  src="./img/react.png"
                  alt="react"
                  style={{ width: "20px" }}
                  className="ProjectTechIcon"
                />
              ) : (
                ""
              )}
              {projects.technology === "node" ? (
                <img
                  src="./img/node-js.png"
                  alt="node"
                  style={{ width: "20px" }}
                  className="ProjectTechIcon"
                />
              ) : (
                <div></div>
              )}

              {projects.technology3 === "sql" ? (
                <img
                  src="./img/mysql.png"
                  alt="sql"
                  style={{ width: "20px" }}
                  className="ProjectTechIcon"
                />
              ) : (
                ""
              )}
            </div>
            <hr />
            <div className="projectButton">
              <a href={projects.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {projects.LiveDemo !== "" ? (
                <a href={projects.LiveDemo} target="_blank" rel="noreferrer" style={{display: projects.LiveDemo === "none" ? "none" : "block"}}>
                  Live Demo
                </a>
              ) : (
                <div style={{ fontSize: "14px", color: "green" }}>
                  In progress
                  <img
                    src="./img/progress.gif"
                    alt="progress"
                    style={{ width: "20px", height: "20px"}}
                  />
                </div>
                
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
