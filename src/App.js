import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

import Home from "./home";
import CalendarYear from "./calendarYear"
import CalendarMonth from './calendarMonth';
import CalendarDay from './calendarDay';
        
function App() {
  return (
    // <div>
    //   <CalendarMonth></CalendarMonth>
    // </div>
    <Router>
      <div className="background">
        <Switch>
          <Route exact path="/" children={<CalendarMonth />}>
          </Route>
          <Route exact path="/:year" children={<CalendarYear />}>
          </Route>
          <Route exact path="/:year/:month" children={<CalendarMonth />}>
          </Route>
          <Route exact path="/:year/:month/:day" children={<CalendarDay />}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
