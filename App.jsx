import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
const AboutMe = lazy(() => import('./components/Aboutme'));
const Projects = lazy(() => import('./components/Projexctcd '));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      
    <div>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Suspense>
  );
}

export default App;
