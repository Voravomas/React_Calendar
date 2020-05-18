import React from "react";
import {
    Link
} from "react-router-dom";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();
    this.goto = "/" + this.now.getFullYear() + "/" + this.now.getMonth();
  }

  render() {
    return (
    <div className="homePage">
      <h3>Welcome to calendar app!</h3>
      <button className="start-button" ><Link className="linkBtn" to={this.goto}>Get to current month</Link></button>
    </div>  
    )
  }
}