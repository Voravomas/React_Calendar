import React from 'react';
import {Link} from 'react-router-dom';
import {month} from '../../constants/constants';
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'
import './calendarYear.css'

export default class CalendarYear extends React.Component {
    render(){
        return (
            <div className="calendar-year">
                <Header>Year: {this.props.info.year}</Header>
                <Sidebar>
                    <button className='btn' onClick={() => this.props.chgYear(-1)}>Prev Year</button>
                    <button className='btn' onClick={() => this.props.chgYear(1)}>Next Year</button>
                </Sidebar>
                <div className='all-month'>{
                    month.map((eachMonth) => (
                        <div className='each-month' key={month.indexOf(eachMonth)}>
                            <Link to="/year/month"
                                className="bald-link"
                                onClick={() => this.props.chgMonth(month.indexOf(eachMonth))}>
                                {eachMonth}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}