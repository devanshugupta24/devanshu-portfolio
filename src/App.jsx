import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="app">
      <Header />
      <Element name="home">
        <MainPage />
      </Element>
      <Element name="aboutme">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="contacts">
        <Footer />
      </Element>
    </div>
  );
}

export default App;

