import './App.css';
import About from './components/About.js'
import Location from './components/Location.js';
import Home from './components/Home.js'
import Team from './components/Team.js'
import React from "react";
import Footer from './components/Footer.js'
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './parts/Navbar.js';

 
function App() {
    return (
      <div className='root'>
      <Navbar />
      <div className='container'>
          <Routes>
              <Route path='*' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />}/>
              <Route path="/team" element={<Team />}/>
          </Routes>
      </div>
      <Footer />
      </div>      
    );
}
 
export default App;
