import { MainMenu } from "../Menu";
import "./404.scss";

export default function NotFound() {
  return (
    <div>
      <MainMenu />
      <div className="notFoundContainer">
        <h1>Page Not found - 404</h1>
      </div>
    </div>
  );
}
