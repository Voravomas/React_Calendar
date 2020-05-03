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
            date: [{
                year: 1970,
                month: 1,
                day: 1
            }
            ],
            bricks: [
                // --------
                {
                    day: 1,
                    dayName: 'Sunday',
                    taskName: 'Go for a walk',
                    taskMore: 'You promised yourself to go for a walk every Sunday.'
                },
                {
                    day: 2,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 3,
                    dayName: 'Tuesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 4,
                    dayName: 'Wednesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 5,
                    dayName: 'Thursday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 6,
                    dayName: 'Friday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 7,
                    dayName: 'Saturday',
                    taskName: "Sleep a lot",
                    taskMore: 'Just because you had difficult weekdays'
                },
                // --------
                {
                    day: 8,
                    dayName: 'Sunday',
                    taskName: 'Go for a walk',
                    taskMore: 'You promised yourself to go for a walk every Sunday.'
                },
                {
                    day: 9,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 10,
                    dayName: 'Tuesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 11,
                    dayName: 'Wednesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 12,
                    dayName: 'Thursday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 13,
                    dayName: 'Friday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 14,
                    dayName: 'Saturday',
                    taskName: "Sleep a lot",
                    taskMore: 'Just because you had difficult weekdays'
                },
                // --------
                {
                    day: 15,
                    dayName: 'Sunday',
                    taskName: 'Go for a walk',
                    taskMore: 'You promised yourself to go for a walk every Sunday.'
                },
                {
                    day: 16,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 17,
                    dayName: 'Tuesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 18,
                    dayName: 'Wednesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 19,
                    dayName: 'Thursday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 20,
                    dayName: 'Friday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 21,
                    dayName: 'Saturday',
                    taskName: "Sleep a lot",
                    taskMore: 'Just because you had difficult weekdays'
                },
                // --------
                {
                    day: 22,
                    dayName: 'Sunday',
                    taskName: 'Go for a walk',
                    taskMore: 'You promised yourself to go for a walk every Sunday.'
                },
                {
                    day: 23,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 24,
                    dayName: 'Tuesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 25,
                    dayName: 'Wednesday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 26,
                    dayName: 'Thursday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 27,
                    dayName: 'Friday',
                    taskName: "",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 28,
                    dayName: 'Saturday',
                    taskName: "Sleep a lot",
                    taskMore: 'Just because you had difficult weekdays'
                },
                // --------
                {
                    day: 29,
                    dayName: 'Sunday',
                    taskName: 'Go for a walk',
                    taskMore: 'You promised yourself to go for a walk every Sunday.'
                },
                {
                    day: 30,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                },
                {
                    day: 31,
                    dayName: 'Monday',
                    taskName: "Wash dad's car",
                    taskMore: 'Dad asked you to visit Carwash on a 2nd of January'
                }
            ]
        }
    }

    render() {
        return (
            <div className="calendar-container">
                <CalendarHeader date={this.state.date[0]}></CalendarHeader>
                <CalendarSideBar></CalendarSideBar>
                <div class="calendar-base">
                    {this.state.bricks.map((brick) =>(
                        <CalendarBlock blockInfo={brick}></CalendarBlock>
                    ))}
                </div>
                <CalendarFooter description={this.state.bricks[1]}></CalendarFooter>
            </div>
        );
    }
}

