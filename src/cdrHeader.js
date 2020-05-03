import React from 'react';

const CalendarHeader = ({date}) => (
    <div className="calendar-header">
        <h2 className="header-h2">Year:<span className="header-data">{date.year}</span> Month: <span className="header-data">{date.month}</span></h2>
    </div>
);

export default CalendarHeader;