import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css'
const Header: React.FC = () => {
  return (
    <header>
      <h1>Profile Rank (FitFinder)</h1>
      <div className="header-controls">
        <ThemeToggle />
        <a href="https://github.com/Code-Social/fitfinder" className="github-btn">
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;