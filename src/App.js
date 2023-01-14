import React from "react";
import Nav from "./components/Nav";
import Social from "./components/social/Social";
import LangSwitcher from "./components/langSwitcher/LangSwitcher";
import Profile from "./components/profile/Profile";
import Title from "./components/Title";


import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  return (
    <div className="MainPage">
      <LangSwitcher />
      <Title />
      <Profile />
      <Nav />
      <Social />
    </div>
  );
};

export default App;
