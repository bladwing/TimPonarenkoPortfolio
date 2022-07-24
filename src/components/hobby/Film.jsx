import React from "react";

import Matrix from "../../assets/Films/matrix.jpg"
import BLADE from "../../assets/Films/blade.jpg"
import IronMan from "../../assets/Films/ironman.jpg"
import Gentlemen from "../../assets/Films/thegentlemen.jpg"

export default function Film() {
    return (
      <div className="Container">
        <div className="Block">
          <img src={Matrix} alt="Film" />
          <h3 className="Title">The Matrix</h3>
        </div>
  
        <div className="Block">
          <img src={BLADE} alt="Film" />
          <h3 className="Title">BLADE</h3>
        </div>
  
        <div className="Block">
          <img src={IronMan} alt="Film" />
          <h3 className="Title">Iron Man</h3>
        </div>
  
        <div className="Block">
          <img src={Gentlemen} alt="Film" />
          <h3 className="Title">The Gentlemen</h3>
        </div>
  
      </div>
    );
  }
  