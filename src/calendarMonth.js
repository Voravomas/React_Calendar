import React from 'react';

import {
    Link,
    useParams
} from "react-router-dom";

import './calendar.css';

import CalendarHeader from './cdrHeader';
import CalendarFooter from './cdrFooter';
import CalendarSideBar from './cdrSideBar';
import CalendarBlock from './cdrBlock';

export default function CalendarMonth() {
    let {year} = useParams();
    let {month} = useParams();

    if ((year === undefined) && (month === undefined)){
        year = new Date().getFullYear();
        month = new Date().getMonth();
    }

    var bricks = [];

    var curDate = new Date(Number(year), Number(month))

    for (let i = 1; i < getDaysInMonth(month, year) + 1; i++) {
        bricks.push({
            date: new Date(year, month, i),
            task: {
                taskName: "a" + i,
                taskDescription: "b" + i
            }
        })
    }
    return (
        <div className="calendar-container">
            <CalendarHeader date={curDate}></CalendarHeader>
            <CalendarSideBar date={curDate}></CalendarSideBar>
            <div class="calendar-grid-container">
                {bricks.map((brick)=>(
                    <CalendarBlock blockInfo={brick}></CalendarBlock>
                ))}
            </div>
            <CalendarFooter description={bricks[0]}></CalendarFooter>
        </div>
    );
}

var getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
}

