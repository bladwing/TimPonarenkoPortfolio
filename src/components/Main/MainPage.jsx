import React from "react";
import { MainMenu } from "../Menu";
import infokData from "../../utils/Information.json";
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
        {infokData.map((id, key) => {
          return (
            <div key={key}>
              <ul>
                <b>{id.birthdayTitle}</b> {id.Birthday}
                <span>
                  <b>{id.contryTitle}</b> {id.Country}
                </span>
                <span>
                  <b>{id.telephoneTitle}</b> {id.telephone}
                </span>
                <span>
                  <b>{id.emailTitle}</b> {id.email}
                </span>
                <span>
                  <b>{id.gitHubTitle}</b> {id.GitHub}
                </span>
              </ul>
            </div>
          );
        })}
      </div>
      <h2 className="educationTitle">განათლება</h2>
      <div className="eduTemplate">
        {educationData.map((edu, key) => {
          return (
            <div key={key} className="eduCard">
              <img src={edu.imageLink} alt={edu.alt} className="eduLogo"/>
              <h3> {edu.AcademyName}</h3>
              <div> {edu.educationType}</div>
              <div className="years"> {edu.years}</div>
              <a href={edu.certificate} target="blank" className="certLink">სერტიფიკატი</a>
              <hr />
            </div>
            
          );
        })}
      </div>
    </div>
  );
}
