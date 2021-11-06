import './App.css';
import Countdown from './components/countdown/Countdown.js';
import Clock from './components/clock/Clock.js';
import Timer from './components/timer/Timer.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          {/* <div className="col-12 col-lg-6 mb-4">
            <Clock/>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <Countdown/>
          </div> */}
          <div className="col-12 col-lg-6 mb-4">
            <Timer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
