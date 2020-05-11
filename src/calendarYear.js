import React from 'react';

import {
    Link,
    useParams
} from "react-router-dom";

import './calendar.css';

const monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

export default function CalendarYear() {
    let { year } = useParams();
    var monthArray = [];

    for (var i = 1; i < 13; i++){
      var tempString = "/" + year + "/" + i;
      monthArray.push([monthName[i - 1], tempString])
    }

  return (
    <div class="year">
      <div class="big-year"><h1>{year}</h1></div>
      <div class="all-months">{monthArray.map((mnth)=>(
        <div class="each-month"><Link to={mnth[1]}>{mnth[0]}</Link></div>
        ))}
      </div>
      <div class="btns">
        <a className='sb-button'>
        <Link to="/">Prev year</Link>
        </a>
        <a className='sb-button'>
        <Link to="/">Next year</Link>
        </a>
      </div>
    </div>
  );
}