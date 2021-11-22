import React from 'react';
import './Countdown.css';
import TimerDisplay from '../common/TimerDisplay.js';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      timerInitialValue: 1000 * 30,
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

  updateCounter = (value) => {
    if (value > 0 || this.state.timer !== 0) {
      this.setState({
        timer: this.state.timer + value
      });
    }
  }

  startCountdown = () => {
    this.setState({
      timerRunning: true,
      timerStarted: true,
      timerInterval: setInterval(() => this.tick(), 10)
    });
  }

  tick = () => {
    if (this.state.timer > 0) {
      this.setState({
        timer: this.state.timer - 10
      });
    } else {
      this.runEndLogic()
    }
  }

  runEndLogic = () => {
    this.setState({
      timerRunning: false,
      timerStarted: false,
      timerReachedEnd: true
    });
    clearInterval(this.state.timerInterval);
  }

  pauseCountdown = () => {
    clearInterval(this.state.timerInterval);
    this.setState({
      timerRunning: false
    })
  }

  resetCountdown = () => {
    this.setState({
      timer: this.state.timerInitialValue,
      timerStarted: false,
      timerRunning: false,
      timerReachedEnd: false
    });
    clearInterval(this.state.timerInterval);
  }


  render() {
    return (
      <div className="countdown-container card bg-light h-100">
        <h1 className='mb-5'>Countdown</h1>
        <div className='d-flex justify-content-center'>
          <TimerDecrease onClick={() => {this.updateCounter(-1000)}}/>
          <TimerDisplay timer={this.state.timer}/>
          <TimerIncrease onClick={() => {this.updateCounter(1000)}}/>
        </div>
        <div className='action-buttons-container'>
          { !this.state.timerReachedEnd &&
            ( !this.state.timerRunning
              ? <StartResumeButtons onClick={this.startCountdown} timerStarted={!this.state.timerStarted}/>
              : <PauseButton onClick={this.pauseCountdown}/>
            )
          }
          <ResetButton onClick={this.resetCountdown}/>
        </div>
        { this.state.timerReachedEnd &&
          <p className='mt-4'>Timer reached end</p>
        }
      </div>
    );
  }
}

function TimerDecrease(props) {
  return (
    <button 
    onClick={props.onClick}
      className='btn btn-secondary px-3 fw-bolder'>
        -
    </button>
  )
}

function TimerIncrease(props) {
  return (
    <button 
      onClick={props.onClick}
      className='btn btn-secondary px-3 fw-bolder'>
        +
    </button>
  )
}

function PauseButton(props) {
  return (
    <button className="btn btn-warning  me-3" onClick={props.onClick}>
      Pause
    </button>
  )
}

function ResetButton(props) {
  return (
    <button 
      className="btn btn-danger" 
      onClick={props.onClick}>
      Reset
    </button>
  )
}

function StartResumeButtons(props) {
  return (
    <button className="btn btn-primary me-3" onClick={props.onClick}>
      { props.timerStarted
        ? <span>Start</span>
        : <span>Resume</span>
      }
    </button>
  )
}