import React from 'react';

import {
    Link,
} from "react-router-dom";

import './calendar.css';

const monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


export default class CalendarYear extends React.Component {
  constructor(props) {
    super(props);
    this.year = props.match.params.year;
    console.log(this.year)
    this.monthArray = this.makeMonthArray();
  }

  makeMonthArray(){
    var arr = [];
    for (var i = 1; i <= 12; i++){
      var tempString = "/" + this.year + "/" + (i - 1);
      arr.push([monthName[i - 1], tempString])
    }
    return arr;
  }

  render() {
    return (
      <div class="year">
        <div class="big-year">
          <h1>{this.year}</h1>
        </div>
        <div class="all-months">{this.monthArray.map((mnth)=>(
          <div class="each-month"><Link className="linkStd" to={mnth[1]}>{mnth[0]}</Link></div>))}
        </div>
        <div class="btns">
          <a className='day-button'>
          <Link className="linkBtn" to={"/" + (parseInt(this.year) - 1)}>Prev year</Link>
          </a>
          <a className='day-button'>
          <Link className="linkBtn" to={"/" + (parseInt(this.year) + 1)}>Next year</Link>
          </a>
        </div>
      </div>
    )
  }
}