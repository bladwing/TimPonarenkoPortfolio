import React from "react";
import "./project.scss";
import ToDo from "../../assets/todo.png";
import Popup from "../../assets/popup.png";
import ToBeContimue from "../../assets/BeContinued.jpg";
import Quiz from "../../assets/quiz.jpg";

export default function Projects() {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectBlocks">
        <a
          href="https://ponarenkotodo.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ToDo} alt="todo_project" />
          <h3>To-Do აპლიკაცია</h3>
        </a>
      </div>

      <div className="ProjectBlocks">
        <a
          href="https://github.com/bladwing/ol-academy-popup-with-handling-outside-click/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Popup} alt="popup" />
          <h3>Popup მენიუ</h3>
        </a>
      </div>
      <div className="ProjectBlocks">
        <a href="https://quizolacademy.netlify.app/" rel="noreferrer">
          <img src={Quiz} alt="quiz" />
          <h3>Quiz - ვიქტორინა</h3>
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
