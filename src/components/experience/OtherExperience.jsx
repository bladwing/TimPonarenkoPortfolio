import React from 'react';
import { useTranslation } from "react-i18next";
import OtherExpBase from "../../utils/OtherExperience.json";

const OtherExperience = () => {
    const { t } = useTranslation();
    return (
        <div className="experienceCards">
               <h2 className="pageTitle" style={{margin: "2% auto 5%", textAlign: "center", width: "100%"}}>
        {t("Exp.otherTitle")}
      </h2>
            {OtherExpBase.map((exp) => {
           
           return (
             <div key={exp.id} data={exp} className="cardContainer">
               
               <div className="Card">
                 <img
                   src={exp.imageLink}
                   alt={exp.alt}
                   className="experienceLogo"
                 />
                 <h3 style={{color: exp.link !== undefined ? "#21325E" : "black"}}>
                   <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.title}</a>
                 </h3>
 
                 <div className="jobTitle"> {exp.jobtitle}</div>
 
                 <div>{exp.years}</div>
 
               </div>
             </div>
           );
         })}
        </div>
    );
};

export default OtherExperience;