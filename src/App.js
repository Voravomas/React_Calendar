import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

import HomePage from "./home";
import CalendarYear from "./calendarYear"
import CalendarMonth from './calendarMonth';
import CalendarDay from './calendarDay';
        
function App() {
  return (
    <Router>
      <div className="background">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:year" component={CalendarYear} />
          <Route exact path="/:year/:month" component={CalendarMonth} />
          <Route exact path="/:year/:month/:day" component={CalendarDay} />
          {/* <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:year">
            <CalendarYear />
          </Route>
          <Route exact path="/:year/:month">
            <CalendarMonth />
          </Route>
          <Route exact path="/:year/:month/:day">
            <CalendarDay />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
