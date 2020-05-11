import React from 'react';

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
    
const CalendarBlock = ({blockInfo}) => (
    <div className="calendar-grid-item">
        <h2 className="bl-h2">{blockInfo.date.getDate()}</h2>
        <h3 className="bl-h3">{weekDays[blockInfo.date.getDay()]}</h3>
        <p className="bl-p">{blockInfo.task.taskName}</p>
    </div>
);

export default CalendarBlock;