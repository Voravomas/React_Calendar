import React from 'react';

import './calendar.css';

import CalendarHeader from './cdrHeader';
import CalendarFooter from './cdrFooter';
import CalendarSideBar from './cdrSideBar';
import CalendarBlock from './cdrBlock';

export default class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);
        this.year = props.match.params.year;
        this.year = parseInt(this.year);
        this.month = props.match.params.month;
        this.month = parseInt(this.month);
        console.log("Month is", this.month)
        this.curDate = new Date(this.year, this.month);
        this.emptyCells = this.curDate.getDay();
        this.bricks = this.fillBricks();

        if(this.emptyCells !== 6) {
            this.fillWithEmpty(this.bricks, this.emptyCells);
        }
    }

    fillBricks() {
        var arr = [];
        for (let i = 1; i <= this.getDaysInMonth(this.month + 1, this.year); i++) {
            arr.push({
                date: new Date(this.year, this.month, i),
                task: {},
                isEmpty: false
            })
        }
        return arr;
    }

    fillWithEmpty(arr, num) {
        for (let j = 0; j <= num; j++) {
            arr.push({
                date: new Date(this.year, this.month, j),
                task: {},
                isEmpty: true
            })
        }
    }

    getDaysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    render() {
        return (
            <div className="calendar-container">
                <CalendarHeader date={this.curDate}></CalendarHeader>
                <CalendarSideBar date={this.curDate}></CalendarSideBar>
                <div class="calendar-grid-container">
                    {this.bricks.map((brick)=>(
                        <CalendarBlock blockInfo={brick}></CalendarBlock>
                    ))}
                </div>
                <CalendarFooter description={this.bricks[0]}></CalendarFooter>
            </div>
        )
    }
}