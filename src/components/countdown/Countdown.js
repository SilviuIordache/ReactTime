import React from 'react';
import './Countdown.css';
import TimerDisplay from '../common/TimerDisplay.js';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      timerInitialValue: 1000 * 3,
      timerStarted: false,
      timerRunning: false,
      timerReachedEnd: false,
      timerInterval: ''
    };
  }

  componentDidMount() {
    this.setState({
      timer: this.state.timerInitialValue
    })
  }

  updateCounter(value) {
    if (value > 0 || this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer + value
      });
    }
  }

  startCountdown() {
    this.setState({
      timerRunning: true,
      timerStarted: true,
      timerInterval: setInterval(() => this.tick(), 10)
    });
  }

  tick() {
    if (this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 10
      });
    } else {
      this.runEndLogic()
    }
  }

  runEndLogic() {
    this.setState({
      timerRunning: false,
      timerStarted: false,
      timerReachedEnd: true
    });
    clearInterval(this.state.timerInterval);
  }

  pauseCountdown() {
    clearInterval(this.state.timerInterval);
    this.setState({
      timerRunning: false
    })
  }

  resetCountdown() {
    this.setState({
      timer: this.state.timerInitialValue,
      timerStarted: false,
      timerRunning: false,
      timerReachedEnd: false
    });
    clearInterval(this.state.timerInterval);
  }

  StartResumeButtons() {
    if (!this.state.timerRunning) {
      return (
        <button className="btn btn-primary me-3" onClick={() => {this.startCountdown()}}>
          { !this.state.timerStarted
            ? <span>Start</span>
            : <span>Resume</span>
          }
        </button>
      )
    }
  }

  PauseButton() {
    return (
      <button className="btn btn-warning  me-3" onClick={() => {this.pauseCountdown()}}>
        Pause
      </button>
    )
  }

  ResetButton() {
    return (
      <button 
        className="btn btn-danger" 
        onClick={() => {this.resetCountdown()}}>
        Reset
      </button>
    )
  }

  TimerDecrease() {
    return (
      <button 
        onClick={ () => { this.updateCounter(-1000)}}
        className='btn btn-secondary px-3 fw-bolder'>
          -
      </button>
    )
  }

  TimerIncrease() {
    return (
      <button 
        onClick={ () => { this.updateCounter(1000)}}
        className='btn btn-secondary px-3 fw-bolder'>
          +
      </button>
    )
  }

  TimerEndMessage() {
    if (this.state.timerReachedEnd) {
      return <p className='mt-4'>Timer reached end</p>
    }
  }

  SPRButtons() {
    if (!this.state.timerReachedEnd) {
      if (!this.state.timerRunning) {
        return this.StartResumeButtons()
      } else {
        return this.PauseButton()
      }
    }
  }
  TimerButtons() {
    return (
      <div className='action-buttons-container'>
        { this.SPRButtons() }
        { this.ResetButton()}
      </div>
    )
  }

  render() {
    return (
      <div className="countdown-container card bg-light">
        <h1 className='mb-5'>Countdown</h1>
        <div className='timer-container'>
          { this.TimerDecrease() }
          <TimerDisplay timer={this.state.timer}/>
          { this.TimerIncrease() }
        </div>
        { this.TimerButtons()}
        { this.TimerEndMessage()}
      </div>
    );
  }
}