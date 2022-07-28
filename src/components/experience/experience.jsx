import ExpBase from "../../utils/experience.json";
import ExperienceImg from "../../assets/experience.png";

import "./exp.scss"

export default function Experience() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ExperienceImg} alt="profilePhoto" />
        <h1 className="pageTitle">გამოცდილება</h1>
      </div>

     

      <div className="experienceCards">
        {ExpBase.map((exp) => {
          return (
            <div key={exp.id} data={exp} className="cardContainer">
              <div className="Card">
                <img
                  src={exp.imageLink}
                  alt={exp.alt}
                  className="experienceLogo"
                />
                <h3>{exp.title}</h3>

                <div className="jobTitle"> {exp.jobtitle}</div>

                <div>{exp.years}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
