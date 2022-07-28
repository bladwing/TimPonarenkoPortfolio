import React from "react";
import Nav from "./components/Nav";
import Social from "./components/social/Social";

import "./App.scss";
import "./scss/effects.scss";

const App = () => {
  return (
    <div className="MainPage">
      <div className="wrapper Header">
        <h1>Tim Ponarenko</h1>
      </div>
      <Nav />
      <Social />
    </div>
  );
};

export default App;
