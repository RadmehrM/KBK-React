import React from 'react';
import './App.css';
import About from './components/About';
import Location from './components/Location';
import TeamSection from './components/TeamSection';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Location />
        <About />
      </header>
      <TeamSection />
      <GalleryPage />
    </div>
  );
}

export default App;
