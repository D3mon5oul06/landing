import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import VideoSection from './Components/VideoSection';
import InfoSection from './Components/InfoSection';
import ComicsSection from './Components/ComicSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <VideoSection />
      <InfoSection />
      <ComicsSection />
      <Footer />
    </div>
  );
}

export default App;
