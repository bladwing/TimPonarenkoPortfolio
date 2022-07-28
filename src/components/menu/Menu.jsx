import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss"

export default function MainMenu() {
  return (
    <div className="Menu">


     
      <Link to="/" className="MenuItem">
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
     
    </div>
  );
}


