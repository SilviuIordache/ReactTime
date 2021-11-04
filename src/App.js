import './App.css';
import Countdown from './components/Countdown.js'
import Clock from './components/Clock.js'


function App() {
  return (
    <div className="App">
      <container>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-4">
            <Clock/>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <Countdown/>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
