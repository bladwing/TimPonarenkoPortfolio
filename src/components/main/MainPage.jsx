import React from "react";
import { MainMenu } from "../Menu";
import "./main.scss";
import "./NameEffect.scss";
// import Tim from "../../assets/Tim.jpg";
// import infoData from "../../utils/Information.json";

export default function Main() {
  return (
    <div>
      <div className="PhotoAndHeader">
        {/* <img className="ProfilePhotoTim" src={Tim} alt="profilePhoto" /> */}

        <div className="wrapper Header">
          <h1>Tim Ponarenko</h1>
        </div>
      </div>
      <MainMenu />

      {/* <div className="informationCard">
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
      </div> */}

    </div>
  );
}
