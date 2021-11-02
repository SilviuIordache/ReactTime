import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js'
import Countdown from './components/Countdown.js'


function App() {
  return (
    <div className="App">
      {/* <Clock/> */}
      <Countdown/>
    </div>
  );
}

export default App;
