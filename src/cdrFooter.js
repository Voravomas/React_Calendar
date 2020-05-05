import React from 'react';

const CalendarFooter = ({description}) => (
    <div className="calendar-footer">
        <h2 className="ft-h2">{description.taskName}</h2>
        <p className="ft-p">{description.taskMore}</p> 
    </div>
);

export default CalendarFooter;
