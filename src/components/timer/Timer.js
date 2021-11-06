import React from 'react';
import './Timer.css';
import TimerDisplay from '../common/TimerDisplay.js';
import { msToTime } from '../../utils/msToTime';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      timerRunning: false,
      timerInterval: '',
      laps: []
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  tick() {
    this.setState({
      timer: this.state.timer + 10
    });
  }

  startTimer() {
    this.setState({
      timerInterval: setInterval( () => this.tick(), 10 ),
      timerRunning: true
    });
  }

  pauseTimer() {
    clearInterval(this.state.timerInterval);
    this.setState({
      timerRunning: false
    })
  }

  resetTimer() {
    clearInterval(this.state.timerInterval);
    this.setState({
      timer: 0,
      timerRunning: false
    })
  }

  countLap() {
    this.state.laps.push(this.state.timer)
  }

  resetLaps() {
    this.setState({
      laps: []
    })
  }


  Laps() {
    const laps = this.state.laps.map((lap, index) => 
      <div key={lap}>
        {index}. {msToTime(lap, true)}
      </div>
    );
    return (
      <div className="laps-container">
        {laps}
      </div>
    )
  }

  render() {
    return (
      <div className="card bg-light clock-container h-100">
        <h1 className="mb-4">Timer</h1>
          <div className="mb-4">
            <TimerDisplay timer={this.state.timer} showMs="true"/>
          </div>
          <div className="top-buttons">
            <button className="btn btn-primary" onClick={() => {this.startTimer()}}>Start</button>
            <button className="btn btn-warning ms-2" onClick={() => {this.pauseTimer()}}>Pause</button>
            <button className="btn btn-danger ms-2" onClick={() => {this.resetTimer()}}>Reset</button>
          </div>
          <div className="mt-4">
            <button className="btn btn-secondary ms-2" onClick={() => {this.countLap()}}>Lap</button>
            <button className="btn btn-danger ms-2" onClick={() => {this.resetLaps()}}>Clear laps</button>
          </div>

          { this.Laps()}
          
      </div>
    );
  }
}