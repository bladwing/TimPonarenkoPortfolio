import React from "react";
import { MainMenu } from "../Menu";
import "./main.scss";
import "./NameEffect.scss";
import Tim from "../../assets/Tim.jpg";
import stockData from "../../utils/Information.json";
import Experience from "../../utils/experience.json";

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
        {stockData.map((id, key) => {
          return (
            <div key={key}>
              <ul>
                <span className="fuck">
                  <b>{id.birthdayTitle}</b> {id.Birthday}
                </span>
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
      <h2 className="experienceTitle">გამოცდილება</h2>
      <div className="experienceCard">
        {Experience.map((exp) => {
          return (
            <div key={exp.id} data={exp}>
              <div className="Card">
                <img src={exp.imageLink} alt="logo" className="experienceLogo"/>
                <h4>
                  <li>{exp.title}</li>
                </h4>

                <div>თანამდეობა: {exp.jobtitle}</div>

                <div>წლები: {exp.years}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
