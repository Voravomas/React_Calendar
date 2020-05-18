import React from 'react';
import {
  Link,
} from "react-router-dom";

export default class CalendarSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.date = props.date;
  }

  yearMonthString(pm){
    var y = this.date.getFullYear();
    var m = this.date.getMonth();
    
    if (((m === 11) && (pm === 1)) || ((m === 0) && (pm === -1))){
      if ((m === 11) && (pm === 1)){
        m = 0;
        y++;
      } else {
        m = 11;
        y--;
      }
    } else {
      m += pm;
    }
    console.log("/" + y + "/" + m)
    return ("/" + y + "/" + m);
  }

  render() {
    return (
      <div className="calendar-side-bar">
        <a className='sb-button'>
          <Link className="linkBtn" to={this.yearMonthString(-1)}>Prev month</Link>
        </a>
        <a className='sb-button'>
          <Link className="linkBtn" to={this.yearMonthString(1)}>Next month</Link>
        </a>
      </div>
    )}
}