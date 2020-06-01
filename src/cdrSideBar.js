import React from 'react';
import {
  Link,
} from "react-router-dom";


export default function CalendarSideBar({date}) {

  return (
  <div className="calendar-side-bar">
      <a className='sb-button'>
      <Link to={yearString(date, -1)}>Prev month</Link>
      </a>
      <a className='sb-button'>
      <Link to={yearString(date, 1)}>Next month</Link>
      </a>
    </div>);
}


function yearString(date, pm){
  return ("/" + (date.getFullYear()) + "/" + (date.getMonth() + pm));
}