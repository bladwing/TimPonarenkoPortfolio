import React from "react";
import { MainMenu } from "../Menu";
import "./main.scss";
import "./NameEffect.scss";

export default function Main() {
  return (
    <div>
      <div className="PhotoAndHeader">
        <div className="wrapper Header">
          <h1>Tim Ponarenko</h1>
        </div>
      </div>
      <MainMenu />
    </div>
  );
}
