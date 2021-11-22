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

  tick = () => {
    this.setState({
      timer: this.state.timer + 10
    });
  }

  startTimer = () => {
    this.setState({
      timerInterval: setInterval( () => this.tick(), 10 ),
      timerRunning: true
    });
  }

  pauseTimer = () => {
    clearInterval(this.state.timerInterval);
    this.setState({
      timerRunning: false
    })
  }

  resetTimer = () => {
    clearInterval(this.state.timerInterval);
    this.setState({
      timer: 0,
      timerRunning: false,
      splits: [],
    })
  }

  registerSplit = () => {
    this.setState({
      splits: [...this.state.splits, this.state.timer]
    })
  }

  render() {
    return (
      <div className="card bg-light clock-container h-100">
        <h1 className="mb-4">Timer</h1>
        <div className="mb-4">
          <TimerDisplay timer={this.state.timer} showMs="true"/>
        </div>
        <div className="top-buttons">
          { !this.state.timerRunning
            ? <StartButton onClick={this.startTimer}/>
            : <PauseButton onClick={this.pauseTimer}/>
          }
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
       
        <div className="card mt-4">
          <h2 className='mt-4 mb-3'>Splits</h2>
          <Splits splits={this.state.splits}/>
        </div>
      </div>
    );
  }
}


function PauseButton(props) {
  return (
    <button 
      className="btn btn-warning" 
      onClick={props.onClick}>
        Pause
    </button>
  )
}

function StartButton(props) {
  return (
    <button 
      className="btn btn-primary" 
      onClick={props.onClick}>
        Start
    </button>
  )
}

function SplitDelta(props) {
  let delta;
  
  if (props.index > 0) {
    delta = msToTime(props.splits[props.index] - props.splits[props.index - 1], true)
  } else {
    delta = msToTime(props.splits[props.index], true)
  }

  let className='ms-2 me-4';
  return <span className={className}>{delta}</span>
}

function Splits(props) {
  const splits = props.splits.map((split, index) => 
  
    <div className='split' key={split}>
      <strong className='me-2'>#{index} </strong>
      <SplitDelta splits={props.splits} index={index}/>
      <span className='text-muted'> {msToTime(split, true)} </span>
    </div>
  )

  return splits
}