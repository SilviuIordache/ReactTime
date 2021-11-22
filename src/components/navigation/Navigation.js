import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="card">
        <ul className="nav nav-pills justify-content-center py-3">
          <li className="nav-item">
            <NavLink to="/timer" className="nav-link">
              Timer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/countdown" className="nav-link">
              Countdown
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/clock" className="nav-link">
              Clock
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}