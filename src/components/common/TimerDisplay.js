import React from "react";
import './TimerDisplay.css'
import { msToTime } from '../../utils/msToTime.js';

export default class TimerDisplay extends React.Component {
  render() {
    let className = 'timer-display'

    if (this.props.showMs)
      className += ' timer-long'
    else
      className += ' timer-short'

    return (
      <div className='d-flex justify-content-center mx-3'>
        <div className={className}>
          {msToTime(this.props.timer, this.props.showMs)}
        </div>
      </div>
    )
  }
}