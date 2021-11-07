import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="card">
        <ul className="nav nav-pills d-flex justify-content-center py-2">
          <li className="nav-item">
            <Link to="/timer">Timer</Link>
          </li>
          <li className="nav-item">
            <Link to="/countdown">Countdown</Link>
          </li>
          <li className="nav-item">
            <Link to="/clock">Clock</Link>
          </li>
        </ul>
      </div>
    );
  }
}