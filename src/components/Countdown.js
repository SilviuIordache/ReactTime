import React from 'react';
import './Countdown.css'

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
      this.setState({
        timerRunning: false,
        timerReachedEnd: true
      });
      clearInterval(this.state.timerInterval);
    }
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

  
  msToTime(ms) {
    const msReal = ms % 1000;

    let msDisplay;
    if (msReal === 0)
      msDisplay = '00';
    else if (msReal < 10)
      msDisplay = '0' + msReal;
    else
      msDisplay = Math.round(msReal / 10)
    ms = (ms - msReal) / 1000;

    const secs = ms % 60 ;
    const secDisplay = (secs >= 10) ? secs : '0' + secs;
    ms = (ms - secs) / 60;
    
    const mins = ms % 60;
    const minsDisplay = (mins >= 60) ? mins : '0' + mins;

    let timer = minsDisplay + ':' + secDisplay + ':' + msDisplay;
    return timer;
  }
  
  render() {
    return (
      <div className="countdown-container">
        <h1>Countdown</h1>
        <div className='timer-container'>
          <button onClick={ () => { this.updateCounter(-1000)}} className='timer-btn'>-</button>

          <div className='timer-inner-container'>
            <h2 className='timer-display'>
              {this.msToTime(this.state.timer)}
            </h2>
          </div>
          <button onClick={ () => { this.updateCounter(1000)}} className='timer-btn'>+</button>
        </div>
        <div className='action-buttons-container'>
          {!this.state.timerRunning 
            ? <button onClick={() => {this.startCountdown()}}>
                { !this.state.timerStarted
                  ? <span>Start</span>
                  : <span>Resume</span>
                }
              </button>
            : <button onClick={() => {this.pauseCountdown()}}>Pause</button>
          }
          <button onClick={() => {this.resetCountdown()}}>Reset</button>
        </div>
        {this.state.timerReachedEnd && <p>Timer reached end</p>}
      </div>
    );
  }
}