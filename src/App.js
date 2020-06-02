import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

import Home from './components/home/home';
import CalendarYear from './components/calendarYear/calendarYear';
import CalendarMonth from './components/calendarMonth/calendarMonth';
import CalendarDay from './components/calendarDay/calendarDay';


class App extends React.Component {
  getInitialDate = num => {
    let curDate = new Date();
    if (num === 0){
      return curDate.getFullYear();
    }
    if (num === 1){
      return curDate.getMonth();
    }
    if (num === 2){
      return curDate.getDate();
    }
  }
  state = {
      year: this.getInitialDate(0),
      month: this.getInitialDate(1),
      day: this.getInitialDate(2)
    }

  changeYear = (what) => {
    let year = this.state.year + what;
    this.setState({year})
  }

  isOkMonth = (month) => {
    if ((month > -1) && (month < 12)){
      this.setState({month});
    } else {
      let newMonth;
      let newYear;
      if (month === -1) {
        newMonth = 11;
        newYear = this.state.year - 1;
      } else {
        newMonth = 0;
        newYear = this.state.year + 1;
      }
      this.setState({
        month: newMonth,
        year: newYear
      });
    }
  }

  isOkDay = (day) => {
    let maxDay = this.getDaysInMonth(this.state.month + 1, this.state.year);
    if ((day > 0) && (day <= maxDay)){
      this.setState({day});
    } else {
      let newDay;
      let newMonth;
      if (day === 0) {
        newMonth = this.state.month - 1;
        newDay = this.getDaysInMonth(this.state.year, newMonth);
      } else {
        newMonth = this.state.month + 1;
        newDay = 1;
      }
      this.setState({
        month: newMonth,
        day: newDay
      })
    }

  }

  changeMonth = (what) => {
    let month;
    if (what < 0){
      if (what === -1){
        month = this.state.month - 1;
      }else{
        month = this.state.month + 1;
      }
    }
    else {
      month = what;
    }
    this.isOkMonth(month);
  }

  changeDay = (what) => {
    let day;
    if (what < 0){
      if (what === -1){
        day = this.state.day - 1;
      } else {
        day = this.state.day + 1;
      }
    } else {
      day = what;
    }
    this.isOkDay(day);
  }

  getDaysInMonth = (month,year) => {
    return new Date(year, month, 0).getDate();
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home year={this.state.year}></Home>
            </Route>
            <Route exact path="/year">
              <CalendarYear info={this.state} chgYear={(what) => this.changeYear(what)} chgMonth={(what) => this.changeMonth(what)}></CalendarYear>
            </Route>
            <Route exact path="/year/month">
              <CalendarMonth info={this.state} chgMonth={(what) => this.changeMonth(what)} chgDay={(what) => this.changeDay(what)}></CalendarMonth>
            </Route>
            <Route exact path="/year/month/day">
              <CalendarDay info={this.state} chgDay={(what) => this.changeDay(what)}></CalendarDay>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
