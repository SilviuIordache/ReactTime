import React from "react";
import './TimerDisplay.css'
import { msToTime } from '../../utils/msToTime.js';

export default class TimerDisplay extends React.Component {
  render() {
    return (
      <div className='d-flex justify-content-center mx-3'>
        <h2 className='timer-display mb-0'>
          <div className='timer-inner-container'>
            {msToTime(this.props.timer, this.props.showMs)}
          </div>
        </h2>
      </div>
    )
  }
}