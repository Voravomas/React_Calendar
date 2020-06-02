import React from 'react';
import { Link } from 'react-router-dom';
import './calendarBlock.css'

export default class CalendarBlock extends React.Component {

    CalendarBlockHidden = () => {
        return (<div className="calendar-grid-item1">
                </div>)
    }

    CalendarBlockReal = () => {
        return (<div className="calendar-grid-item">
                    <Link to="/year/month/day" className='bald-link'>
                        <h2 className='bl-h2'>{this.props.infoBlock.date}</h2>
                        <h3 className='bl-h3'>{this.props.infoBlock.weekDay}</h3>
                    </Link>
                </div>)
    }

    render(){
        return (
            (this.props.infoBlock.date < 0) ? this.CalendarBlockHidden(): this.CalendarBlockReal()
        )
    }
}