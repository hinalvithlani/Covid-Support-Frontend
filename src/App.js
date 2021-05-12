import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Navbar from "landingPages/Navbar.js";
import AddLandingPage from "landingPages/AddLandingPage.js";
import MainLandingPage from "landingPages/MainLandingPage.js";
import SearchLandingPage from "landingPages/SearchLandingPage";
import TeamLandingPage from "landingPages/TeamLandingPage";

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
        <Route exact path='/Team'>
          <TeamLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
