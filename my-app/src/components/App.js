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
  "/Hulu": ["#1e2126", "#36ca94"],
  "/Prime": ["#0f171e", "#00a8e1"],
  "/Peacock": ["#111111", "#fccc12"],
  "/Showtime": ["#b10400", "white"],
  "/Paramount+": ["#0037c5", "white"],
  "/Disney+": ["#1a202c", "#0063e5"],
  "/HBOMax": ["rgb(36 3 101)", "white"],
  "/AppleTV+": ["#262628", "white"],
  "/Starz": ["#121212", "white"],
};
function App() {
  const location = useLocation();
  let backgroundColor = "#111111";
  let textColor = "red";
  const colors = routeToColorsMap[location.pathname];
  if (colors !== undefined) {
    backgroundColor = colors[0];
    textColor = colors[1];
  }
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      <NavBar />
      <Switch>
        {/* <Route path="/netflix">
          <Netflix buttonColor={textColor} btnText={backgroundColor} />
        </Route> */}

        <Route path="/Hulu">
          <Hulu buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/AppleTV+">
          <AppleTV buttonColor={textColor} btnText={backgroundColor}/>
        </Route>

        <Route path="/Paramount+">
          <Paramount buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/Peacock">
          <Peacock buttonColor={textColor} btnText={backgroundColor}/>
        </Route>

        <Route path="/Prime">
          <Prime buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/Showtime">
          <Showtime buttonColor={textColor} btnText={backgroundColor}/>
        </Route>

        <Route path="/Starz">
          <Starz buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/Disney+">
          <Disney buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/HBOMax">
          <HBOMax buttonColor={textColor} btnText={backgroundColor}/>
        </Route>
        <Route path="/">
          <Netflix buttonColor={textColor} btnText={backgroundColor} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
