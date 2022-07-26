import educationData from "../utils/education.json"
import { MainMenu } from "./Menu";


export default function Education () {
    return (

        <div>
            <h2 className="educationTitle">განათლება</h2>
            <MainMenu/>
        
        <div className="eduTemplate">
          {educationData.map((edu, key) => {
            return (
              <div key={key} className="eduCard">
                <img src={edu.imageLink} alt={edu.alt} className="eduLogo" />
                <h3> {edu.AcademyName}</h3>
                <div> {edu.educationType}</div>
                <div className="years"> {edu.years}</div>
                <a href={edu.certificate} target="blank" className="certLink">
                  სერტიფიკატი
                </a>
                <hr />
              </div>
            );
          })}
        </div>
        
        </div>
    )
}
