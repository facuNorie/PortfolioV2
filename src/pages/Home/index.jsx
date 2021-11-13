import React, { useEffect } from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Main from '../../components/Main';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
