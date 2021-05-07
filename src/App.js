import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Navbar from "Navbar.js";
import AddLandingPage from "AddLandingPage.js";
import MainLandingPage from "MainLandingPage.js";
import SearchLandingPage from "SearchLandingPage";
import TCPage from "TCPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <MainLandingPage />
        </Route>
        <Route exact path='/Add'>
          <AddLandingPage />
        </Route>
        <Route exact path='/Search'>
          <SearchLandingPage />
        </Route>
        <Route exact path='/tandc'>
          <TCPage />
        </Route>
      </Switch>
    </Router>
  );
}
