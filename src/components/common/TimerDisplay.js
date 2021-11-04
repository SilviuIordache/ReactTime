import React from "react";
import { msToTime } from '../../utils/msToTime.js';


export default class TimerDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='timer-inner-container'>
        <h2 className='timer-display mb-0'>
          {msToTime(this.props.timer)}
        </h2>
      </div>
    )
  }
}