import React from 'react';

const CalendarFooter = ({description}) => (
    <div className="calendar-footer">
        <h2 className="ft-h2">Task name: {description.task.taskName}</h2>
        <p className="ft-p">Task description: {description.task.taskDescription}</p>
    </div>
);

export default CalendarFooter;
