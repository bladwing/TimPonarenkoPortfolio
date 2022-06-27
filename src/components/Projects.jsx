import React from "react";
import ToDo from "../resourse/todo.png";
import Popup from "../resourse/popup.png"
import ToBeContimue from "../resourse/BeContinued.jpg"

export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectBlocks">
        <a
          href="https://github.com/bladwing/ol-academy-ponarenko-react-todo/"
          target="_blank" rel="noreferrer"
        >
          <img src={ToDo} alt="todo_project" />
          <h3>To-Do აპლიკაცია</h3>
        </a>
      </div>
      
      <div className="ProjectBlocks">
        <a
          href="https://github.com/bladwing/ol-academy-popup-with-handling-outside-click/"
          target="_blank" rel="noreferrer"
        >
          <img src={Popup} alt="popup" />
          <h3>Popup მენიუ</h3>
        </a>
      </div>
      <div className="ProjectBlocks">
        <a href="!#" rel="noreferrer">
          <img src={ToBeContimue} alt="popup" />
          <h3>...</h3>
          </a>
      </div>
      <div className="ProjectBlocks">
        <a href="!#" rel="noreferrer">
        <img src={ToBeContimue} alt="popup" />
        <h3>...</h3>
        </a>
    </div>
     
    </div>
  );
}
