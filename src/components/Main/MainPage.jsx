import React from "react";
import { MainMenu } from "../Menu";
import "./main.scss";
import "./NameEffect.scss";
import Tim from "../../assets/Tim.jpg";
import stockData from "../../utils/Information.json";


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
      <h2 className="experienceTitle">Something</h2>
    
    </div>
  );
}
