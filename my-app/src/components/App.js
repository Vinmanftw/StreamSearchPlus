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
import { Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("/");
  const [curBack, setCurBack] = useState("");
  const [curText, setCurText] = useState("");
  function handleOnClick(color, colour) {
    setCurBack(color);
    setCurText(colour);
  }
  return (
    <div style={{ backgroundColor: curBack, color: curText }}>
      <NavBar onChangePage={setPage} handleOnClick={handleOnClick} />
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
