import * as React from 'react';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Header from '../sections/Header';
import Navbar from '../sections/Navbar';
import Services from '../sections/Services';
import Skills from '../sections/Skills';

const Portfolio = () => (
  <div>
    <Navbar />
    <About />
    <Header />
    <Services />
    <Contact />
    <Skills />
  </div>
);

export default Portfolio;
