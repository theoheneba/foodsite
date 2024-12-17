import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import GradientBackground from './components/animations/GradientBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <Navbar />
          <Hero />
        </div>
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;