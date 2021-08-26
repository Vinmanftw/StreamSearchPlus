import React, { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Netflix from "./Netflix";
import Hulu from "./Hulu";
import Disney from "./Disney";
import AppleTV from "./AppleTV";
import HBOMax from "./HBOMax";
import Paramount from "./Paramount";
import Peacock from "./Peacock";
import Showtime from "./Showtime";
import Prime from "./Prime";
import Starz from "./Starz";
import { Switch, Route, useLocation } from "react-router-dom";

const routeToColorsMap = {
  "/Netflix": ["#111111", "red"],
  "/Hulu": ["green", "white"],
  "/Prime": ["#0f171e", "#00a8e1"],
  "/Peacock": ["#111111", "#ffffff"],
  "/Showtime": ["red", "white"],
  "/Paramount+": ["blue", "white"],
  "/Disney+": ["blue", "white"],
  "/HBOMax": ["purple", "white"],
  "/AppleTV+": ["gray", "white"],
  "/Starz": ["grey", "white"],
};
function App() {
  const location = useLocation();
  let backgroundColor = "#fff";
  let textColor = "#000";
  const colors = routeToColorsMap[location.pathname];
  if (colors !== undefined) {
    backgroundColor = colors[0];
    textColor = colors[1];
  }
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <NavBar />
      <Switch>
        <Route path="/Netflix">
          <Netflix />
        </Route>

        <Route path="/Hulu">
          <Hulu />
        </Route>
        <Route path="/AppleTV+">
          <AppleTV />
        </Route>

        <Route path="/Paramount+">
          <Paramount />
        </Route>
        <Route path="/Peacock">
          <Peacock />
        </Route>

        <Route path="/Prime">
          <Prime />
        </Route>
        <Route path="/Showtime">
          <Showtime />
        </Route>

        <Route path="/Starz">
          <Starz />
        </Route>
        <Route path="/Disney+">
          <Disney />
        </Route>
        <Route path="/HBOMax">
          <HBOMax />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
