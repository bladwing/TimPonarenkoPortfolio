import educationData from "../utils/education.json"
import "../scss/NameEffect.scss"
import MainMenu from "./Menu";
import EduLogo from "../assets/education.png"


export default function Education () {
    return (

        <div>
            <div className="PhotoAndHeader">
          <img src={EduLogo} alt="eduLogo" className="ProfilePhoto"/>
            <h1 className="pageTitle">განათლება</h1>
            </div>
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
