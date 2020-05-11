import React from "react";
import {
    Link,
    useParams
} from "react-router-dom";

export default function CalendarDay() {
    let {year} = useParams();
    let {month} = useParams();
    let {day} = useParams();
    var thisDay = new Date(year, month, day);
    console.log(year, month, day);

  return (
    <div class="dayNotes">
        <h3 class="date">{weekDays[thisDay.getDay()]}, {day} {monthName[month]} {year} </h3>
      <div class="notes">
        <h2 class="notes-title">Wash a car</h2>
        <hr class="notes-hr"></hr>
        <p class="notes-main">Description: Wash a carWash a carWash a car</p>
      </div>
      <div class="btns">
        <a className='sb-button'>
        <Link to="/">Prev day</Link>
        </a>
        <a className='sb-button'>
        <Link to="/">Next day</Link>
        </a>
      </div>
    </div>
  );
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