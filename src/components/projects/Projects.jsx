import React from "react";
import ProjectBase from "../../utils/projects.json";
import "./project.scss";

export default function Projects() {
  return (
    <div className="ProjectsContainer">
     
        {ProjectBase.map((projects, key) => {
          return (
            <div key={key} className="ProjectCard">
              <img src={projects.imageLink} alt={projects.alt} />
              <br />
              <a href={projects.id}>{projects.ProjectName}</a>
            </div>
          );
        })}
      </div>

  );
}
