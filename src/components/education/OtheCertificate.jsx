import React from "react";
import { useTranslation } from "react-i18next";
import OtherEducation from "../../utils/OtherEducation.json";

export default function OtheCertificate() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="pageTitle" style={{margin: "2% auto 5%", textAlign: "center" }}>
        {t("Edu.otherTitle")}
      </h2>
      <div className="eduTemplate">
        {OtherEducation.map((edu, key) => {
          return (
            <div key={key} className="eduCard">
              <img src={edu.imageLink} alt={edu.alt} className="eduLogo" />
              <h3 className="academyName"> {edu.AcademyName}</h3>
              <div> {edu.educationType}</div>
              <div className="years"> {edu.years}</div>
         { edu.certificate !== ""  ? <a href={edu.certificate} target="blank" className="certLink">
                <button className="certificateButton">
                  {t("Certificate")}
                </button>
              </a> : <div style={{height: "17%"}}></div>}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
