import './App.css';
import About from './components/About.js'
import Location from './components/Location.js';
import Home from './components/Home.js'
import Team from './components/Team.js'
import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './parts/Navbar.js';
import Footer from './components/Footer.js';
import GalleryPage from './components/GalleryPage.js';
import ContactUs from './components/ContactUs.js';
import Testimonials from './components/Testimonials.js';

 
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
              <Route path="/gallery" element={<GalleryPage />}/>
              <Route path="/contact" element={<ContactUs />}/>
              <Route path="/testimonials" element={<Testimonials />}/>



          </Routes>
          <Footer/>
      </div>
      </div>      
    );
}
 
export default App;
