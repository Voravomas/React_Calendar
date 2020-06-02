import React from 'react';
import './header.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}