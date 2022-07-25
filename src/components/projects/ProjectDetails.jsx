import {Link} from "react-router-dom"
import { MainMenu } from "../Menu";



export default function ProjectDetails() {
    return (
      <div className="ProjectDetailContainer">
        <MainMenu/>
     <h2>Here will be project soon...</h2> 
      Please: <Link to="/projects">Go Back</Link>
      </div>
    )
    
  }