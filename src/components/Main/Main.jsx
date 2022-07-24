import { MainMenu } from "../Menu";
import "./main.scss";
import "./NameEffect.scss";
import Tim from "../../assets/Tim.jpg";
import Georgia from "../../assets/georgia.png";

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

      <div className="Content">
        <div> Born : 1991</div>
        <div>
          {" "}
          Country : Georgia{" "}
          <img src={Georgia} className="geoFlag" alt="georgia_flag" />
        </div>
        <div>აქ იქნება ინფორმაცია...</div>
      </div>
    </div>
  );
}
