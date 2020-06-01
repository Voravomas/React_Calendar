import React from 'react';

const monthName = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

const CalendarHeader = ({date}) => (
    <div className="calendar-header">
        <h2 className="header-h2">Year:<span className="header-data">
            {date.getFullYear()}
        </span> Month: <span className="header-data">
            {monthName[date.getMonth()]}
        </span></h2>
    </div>
);

export default CalendarHeader;