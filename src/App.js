import React from "react";
import Nav from "./components/Nav";
import Social from "./components/social/Social";
import LangSwitcher from "./components/langSwitcher/LangSwitcher";
import Profile from "./components/profile/Profile";
import { useTranslation } from "react-i18next";

import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  const { t } = useTranslation();
  const lang = JSON.parse(localStorage.getItem("lang"));
  return (
    <div className="MainPage" >
      <LangSwitcher />
      <div className="wrapper Header">
        <h1>{t("TitleName")}</h1>
      </div>
      <Profile/>
      <Nav />
      <Social />
    </div>
  );
};

export default App;
