import React from "react";
import { MainMenu } from "../Menu";
import infoData from "../../utils/Information.json";
import educationData from "../../utils/educaton.json";
import "./main.scss";
import "./NameEffect.scss";
import Tim from "../../assets/Tim.jpg";

export default function Main() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <img className="ProfilePhotoTim" src={Tim} alt="profilePhoto" />

        <div className="wrapper Header">
          <h1>Tim Ponarenko</h1>
        </div>
      </div>
      <MainMenu />

      <div className="informationCard">
        {infoData.map((id, key) => {
          return (
            <div key={key}>
              <div>
                <b>დაბადების დღე:</b> {id.birthday}
              </div>
              <div>
                {" "}
                <b>ტელეფონი:</b> {id.telephone}
              </div>
              <div>
                {" "}
                <b>ელ. ფოსტა:</b> {id.email}
              </div>
              <div>
                <a href={id.github}>GitHub</a>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="educationTitle">განათლება</h2>
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
  );
}
