import React from 'react';
import './calendarDay.css';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import {weekdays, month} from '../../constants/constants';
import { Link } from 'react-router-dom';
import TaskList from './taskList'

export default class CalendarDay extends React.Component {
    render() {
        let curDay = new Date(this.props.info.year, this.props.info.month, this.props.info.day);
        let strToHeader = "Date: " + weekdays[curDay.getDay()] + ", " + this.props.info.day + " " + month[this.props.info.month] + ", " + this.props.info.year;
        return (
            <div className='calendar-day'>
                <Header>
                    {strToHeader}
                </Header>
                <Sidebar>
                    <button className='btn' onClick={() => this.props.chgDay(-1)}>Prev day</button>
                    <button className='btn' onClick={() => this.props.chgDay(-2)}>Next day</button>
                    <Link className='bald-link' to='/year/month'><button className='btn2'>Back to month</button></Link>
                </Sidebar>
                <div className='task-table'>
                    <TaskList date={this.state}/>
                </div>
            </div>
        )
    }
}