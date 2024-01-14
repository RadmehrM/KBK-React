import './App.css';
import About from './components/About.js'

import Location from './components/Location.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Location/>
        <About/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
