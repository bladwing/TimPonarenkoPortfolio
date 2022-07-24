import ExpBase from "../../utils/experience.json";
import ExperienceImg from "../../assets/experience.png";
import { MainMenu } from "../Menu";
import "./exp.scss"

export default function Experience() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhoto" src={ExperienceImg} alt="profilePhoto" />
        <h1>გამოცდილება</h1>
      </div>

      <MainMenu />

      <div className="experienceCard">
        {ExpBase.map((exp) => {
          return (
            <div key={exp.id} data={exp}>
              <div className="Card">
                <img
                  src={exp.imageLink}
                  alt={exp.alt}
                  className="experienceLogo"
                />
                <h4>{exp.title}</h4>

                <div> {exp.jobtitle}</div>

                <div>{exp.years}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
