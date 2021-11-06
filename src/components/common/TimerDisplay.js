import React from "react";
import './TimerDisplay.css'
import { msToTime } from '../../utils/msToTime.js';

export default class TimerDisplay extends React.Component {
  render() {
    return (
      <div className='d-flex justify-content-center mx-3'>
        <h2 className='timer-display mb-0'>
          {msToTime(this.props.timer, this.props.showMs)}
        </h2>
      </div>
    )
  }
}