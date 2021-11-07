import './App.css';

import { Routes, Route } from "react-router-dom";

import Countdown from './components/countdown/Countdown.js';
import Clock from './components/clock/Clock.js';
import Timer from './components/timer/Timer.js';
import Navbar from './components/navbar/Navbar.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-lg-6">
            <Navbar/>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6 mb-4">
            <Routes>
              <Route path="/" element={<Countdown />} />
              <Route path="clock" element={<Clock />} />
              <Route path="timer" element={<Timer />} />
              <Route path="countdown" element={<Countdown />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
