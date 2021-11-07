import React from 'react';
import './Clock.css';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="card bg-light clock-container h-100">
        <h1>Clock</h1>
        <div className='timer-size'>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}