// src/App.jsx
import React from 'react';
import Header from '../../portfolio/src/components/Header';
import About from '../../portfolio/src/components/About';
import Projects from '../../portfolio/src/components/Projects';
import Certificates from '../../portfolio/src/components/Certificates';  // Import Certificates component
import Contact from '../../portfolio/src/components/Contact';
import Footer from '../../portfolio/src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Certificates />  {/* Add Certificates section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
