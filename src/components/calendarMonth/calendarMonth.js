import React from 'react';
import { Link } from 'react-router-dom';
import {weekdays, month} from '../../constants/constants';
import CalendarBlock from './CalendarBlock';
import './calendarMonth.css'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'

export default class CalendarMonth extends React.Component {
    fillBricks = () => {
        var arr = [];

        let tempDay = new Date(this.props.info.year, this.props.info.month);
        let numOfDaysFromBegOfWeek = tempDay.getDay();
        if (numOfDaysFromBegOfWeek !== 6) {
            for (let j = 1; j <= numOfDaysFromBegOfWeek + 1; j++) {
                arr.push({
                    date: (-1) * j,
                    weekDay: 0,
                })
            }
        }

        let daysInThisMonth = this.getDaysInMonth(this.props.info.month + 1, this.props.info.year);
        for (let i = 1; i <= daysInThisMonth; i++) {
            let tempDay = new Date(this.props.info.year, this.props.info.month, i);
            arr.push({
                date: i,
                weekDay: weekdays[tempDay.getDay()],
            })
        }
        return arr;
    }

    getDaysInMonth = (month,year) => {
        return new Date(year, month, 0).getDate();
    }

    render(){
        let bricks = this.fillBricks();
        return(
            <div className='calendar-container'>
                <Header>
                <p>Month: {month[this.props.info.month]}</p>
                <p>Year: {this.props.info.year}</p>
                </Header>
                <Sidebar>
                    <button className='btn' onClick={() => this.props.chgMonth(-1)}>Prev Month</button>
                    <button className='btn' onClick={() => this.props.chgMonth(-2)}>Next Month</button>
                    <Link className='bald-link' to='/year'><button className='btn2'>Back to year</button></Link>
                </Sidebar>
                <div className="calendar-grid-container">
                    {bricks.map((brick)=>(
                        <div onClick={() => this.props.chgDay(brick.date)} key={brick.date}><CalendarBlock infoBlock={brick}></CalendarBlock></div>
                    ))}
                </div>
            </div>
        )
    }
}