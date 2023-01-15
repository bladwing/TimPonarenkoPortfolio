import educationData from "../../utils/education.json";
import "./edu.scss"
import "../../scss/NameEffect.scss";
import { useTranslation } from "react-i18next";

import EduLogo from "../../assets/education.png";
import OtheCertificate from "./OtheCertificate";
      
export default function Education() {
  const {t} = useTranslation();
  return (
    <div>
    
      <div className="PhotoAndHeader">
        <img src={EduLogo} alt="eduLogo" className="ProfilePhoto" />
        <h1 className="pageTitle">{t("menuAndTitle.Education")}</h1>
      </div>
      <h2 className="pageTitle" style={{margin: "0 auto 5%", textAlign: "center" }}>Programming Education</h2>
      <div className="eduTemplate">
        {educationData.map((edu, key) => {
          return (
            <div key={key} className="eduCard">
              <img src={edu.imageLink} alt={edu.alt} className="eduLogo" />
              <h3 className="academyName"> {edu.AcademyName}</h3>
              <div> {edu.educationType}</div>
              <div className="years"> {edu.years}</div>
              <a
                href={edu.certificate}
                target="blank"
                className="certLink"
              >
                <button className="certificateButton">{t("Certificate")}</button>
              </a>
              <hr />
            </div>
          );
        })}
      </div>
      <OtheCertificate/>
    </div>
  );
}
