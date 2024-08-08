import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Objectives from './components/Objectives';
import AdditionalInfo from './components/AdditionalInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-darkGray text-textGray">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Certifications />
      <Objectives />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default App;
