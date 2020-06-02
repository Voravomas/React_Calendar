import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-page">
                <h3>Welcome to calendar app!</h3>
                <Link className='bald-link' to={"/year"}>
                    <button className='btn'>
                        Get to current year
                    </button>
                </Link>
            </div>
        )
    }   
}