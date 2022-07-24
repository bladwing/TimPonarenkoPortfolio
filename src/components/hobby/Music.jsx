import React from "react";
import LP from "../../assets/MusicBand/LP.jpg";
import PR from "../../assets/MusicBand/PR.jpg";
import SLIPKNOT from "../../assets/MusicBand/SLIPKNOT.jpg"
import King from "../../assets/MusicBand/king810.jpg"

export default function MusicPage() {
  return (
    <div className="Container">
      <div className="Block">
        <img src={LP} alt="BandPhoto" />
        <h3 className="Title">Linkin Park</h3>
      </div>

      <div className="Block">
        <img src={PR} alt="BandPhoto" />
        <h3 className="Title">Papa Roach</h3>
      </div>

      <div className="Block">
        <img src={SLIPKNOT} alt="BandPhoto" />
        <h3 className="Title">SlipKnot</h3>
      </div>

      <div className="Block">
        <img src={King} alt="BandPhoto" />
        <h3 className="Title">KING 810</h3>
      </div>

    </div>
  );
}
