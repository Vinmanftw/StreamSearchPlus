import React, { useEffect, useState } from "react";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Home from "./Home";
import { Switch, Route } from "react-router-dom"


function App() {

  return (
    <>
      
      <Switch>
        <Route path="/Page1">
          <Page1 />
        </Route>

        <Route path="/Page2">
          <Page2 />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </>
  );
}

export default App;
