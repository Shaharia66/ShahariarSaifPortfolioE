import { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Industrial from './components/Industrial';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const SECTIONS = {
  about:          <About />,
  education:      <Education />,
  research:       <Research />,
  industrial:     <Industrial />,
  projects:       <Projects />,
  skills:         <Skills />,
  certifications: <Certifications />,
  contact:        <Contact />,
};

const LABELS = {
  about: 'About', education: 'Education', research: 'Research',
  industrial: 'Industrial', projects: 'Projects', skills: 'Skills',
  certifications: 'Certifications', contact: 'Contact',
};

export default function App() {
  const [active, setActive] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-wrap">
      {/* Mobile topbar */}
      <div className="topbar">
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
        <span className="topbar-name">Gazi Shahariar Hasan</span>
        <span style={{ fontSize: 11, color: 'var(--text2)' }}>{LABELS[active]}</span>
      </div>

      {/* Sidebar (desktop: always visible, mobile: slide-in) */}
      <Sidebar
        active={active}
        onSelect={setActive}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="main-content">
        {SECTIONS[active]}
      </main>
    </div>
  );
}
