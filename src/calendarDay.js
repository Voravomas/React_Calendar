import React from "react";
import {
    Link,
    useParams
} from "react-router-dom";

import TaskList from './taskList';

export default class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    this.year = props.match.params.year;
    this.month = props.match.params.month;
    this.day = props.match.params.day;
    this.thisDay = new Date(this.year, this.month, this.day);
    this.linkBack = "/" + this.year + "/" + this.month;
    this.allTasks = ["go for a walk", "sleep"];
  }  

  render() {
    return (
      <div class="dayNotes">
        <h3 class="date">{weekDays[this.thisDay.getDay()]}, {this.day} {monthName[this.month]} {this.year} </h3>
        <TaskList></TaskList>
        <a className='day-button'>
          <Link className="linkBtn" to={this.linkBack}>Get back</Link>
        </a>
      </div>
    )
  }
}

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];