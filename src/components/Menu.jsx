import React from "react";
import { Link } from "react-router-dom";

export function MainMenu() {
  return (
    <div className="Menu">
      <Link to="/" className="MenuItem">
        {" "}
        Tim{" "}
      </Link>
      <Link to="/projects" className="MenuItem">
        {" "}
        პროექტები{" "}
      </Link>
      <Link to="/experience" className="MenuItem">
        {" "}
        გამოცდილება{" "}
      </Link>
      <Link to="/education" className="MenuItem">
        {" "}
        განათლება{" "}
      </Link>
      <Link to="/hobby" className="MenuItem">
        {" "}
        ჰობი{" "}
      </Link>
    </div>
  );
}

export function SubMenu() {
  return (
    <div className="Menu">
      <Link to="/music" className="MenuItem">
        {" "}
        მუსიკა{" "}
      </Link>
      <Link to="/films" className="MenuItem">
        {" "}
        ფილმები{" "}
      </Link>
    </div>
  );
}
