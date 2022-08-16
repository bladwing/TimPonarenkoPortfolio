import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./projects/Projects";
import NotFound from "./NotFound/NotFound";
import Experience from "./experience/experience";
import Education from "./education/Education";

import Menu from "./menu/Menu"

export default function Nav() {
  return (
    <Router>
        <Menu/>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
      
    </Router>
  );
}
