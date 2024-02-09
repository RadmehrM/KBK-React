import './App.css';
import About from './components/About';
import Location from './components/Location';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
      <TeamSection />
      <Testimonials />
    </div>
  );
}

export default App;
