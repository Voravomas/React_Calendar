import React from 'react';
import { Link } from 'react-router-dom';

const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]
    
const CalendarBlock = ({blockInfo}) => (
    (blockInfo.isEmpty === true) ? CalendarBlockHidden({blockInfo}): CalendarBlockReal({blockInfo})
);

const CalendarBlockHidden = ({blockInfo}) => (
    <div className="calendar-grid-item1">
    </div>
    );

const CalendarBlockReal = ({blockInfo}) => (
    <div className="calendar-grid-item">
        <Link to={getLink(blockInfo)} className="linkStd">
            <h2 className="bl-h2">{blockInfo.date.getDate()}</h2>
            <h3 className="bl-h3">{weekDays[blockInfo.date.getDay()]}</h3>
            <p className="bl-p">{blockInfo.task.taskName}</p>
        </Link>
    </div>
    );

function getLink(info){
    return "/" + info.date.getFullYear() + "/"
    + info.date.getMonth() + "/"
     + info.date.getDate();
}

export default CalendarBlock;