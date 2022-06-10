import './App.css';
import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {

  const handleScroll = (para) => {
    const node = document.getElementById(para)
    scrollIntoView(node, {
      behavior: 'smooth',
      block: 'start',
      // scrollMode: 'if-needed',
    })
  }

  const handleRedirectPage = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

  return (
    <div className="min-h-screen bg-slate-900 h-fit flex flex-col items-center">
      <Header handleScroll={handleScroll}/>
      <div className='rootPage'>
        <About handleRedirectPage={handleRedirectPage} />
        <Skills />
        <Projects />
        <Contact handleRedirectPage={handleRedirectPage} />
      </div>
    </div>
  );
}

export default App;
