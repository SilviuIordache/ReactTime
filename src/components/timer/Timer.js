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
      splits: []
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
      timerRunning: false,
      splits: []
    })
  }

  registerSplit() {
    this.state.splits.push(this.state.timer)
  }

  Splits() {
    const splits = this.state.splits.map((split, index) => 
      <div className='split' key={split}>
        <strong className='me-2'>
          {index} 
        </strong>
        {msToTime(split, true)}
      </div>
    );
    if (this.state.splits.length > 0) {
      return (
        <div>
          <h2 className='mt-4'>Splits</h2>
          <div className="splits-container card">
            <div className='splits-inner-container'>
              {splits}
            </div>
          </div>
        </div>
      )
    }
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
            <button
              disabled={!this.state.timerRunning}
              className="btn btn-dark ms-2" 
              onClick={() => {this.registerSplit()}}>
                Split
            </button>
          </div>
          { this.Splits()}
      </div>
    );
  }
}