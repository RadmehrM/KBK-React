import './App.css';
import About from './components/About.js'
import Location from './components/Location.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/location" element={<Location />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
