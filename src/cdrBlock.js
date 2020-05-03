import React from 'react';

const CalendarBlock = ({blockInfo}) => (
    <div className="block-calendar">
        <h2 className="bl-h2">{blockInfo.day}</h2>
        <h3 className="bl-h3">{blockInfo.dayName}</h3>
        <p className="bl-p">{blockInfo.taskName}</p>
    </div>
);

export default CalendarBlock;