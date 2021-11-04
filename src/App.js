import './App.css';
import Countdown from './components/countdown/Countdown.js'
import Clock from './components/clock/Clock.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-12 col-lg-4">
            <Clock/>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-4">
            <Countdown/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
