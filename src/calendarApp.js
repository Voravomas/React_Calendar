import React from 'react';

import './calendar.css';

import CalendarHeader from './cdrHeader';
import CalendarFooter from './cdrFooter';
import CalendarSideBar from './cdrSideBar';
import CalendarBlock from './cdrBlock';

export default class Calendar extends React.Component {
    constructor() {
        super();

        this.state = {
            date: new Date(1970, 1, 1),
            bricks: []
        }
    }

    render() {
        for (let i = 1; i < 31; i++) {
            this.state.bricks.push({
                key: i,
                date: new Date(1970, 1, i),
                task: {
                    taskName: "a" + i,
                    taskDescription: "b" + i
                }
            })
        }
        return (
            <div className="calendar-container">
                <CalendarHeader date={this.state.date}></CalendarHeader>
                <CalendarSideBar></CalendarSideBar>
                <div class="calendar-grid-container">
                    {this.state.bricks.map((brick)=>(
                        <CalendarBlock blockInfo={brick}></CalendarBlock>
                    ))}
                </div>
                <CalendarFooter description={this.state.bricks[0]}></CalendarFooter>
            </div>
        );
    }
}

