import React from "react";
import {Link} from 'react-router-dom'
import ProjectBase from "../../utils/projects.json";
import "./project.scss";

export default function Projects() {
  return (
    <div className="ProjectsContainer">
     
        {ProjectBase.map((projects, key) => {
          return (
            <div key={key} className="ProjectCard">
              <img src={projects.imageLink} alt={projects.alt} className="projectImg"/>
              <br />
              <Link to={`/project/${projects.id}`} className="projectDetailLink">{projects.ProjectName}</Link>
            </div>
          );
        })}
      </div>

  );
}
