import React, { useState, useMemo } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Debounce utility (local, simple, safe)
  function debounce<T extends (...args: any[]) => void>(fn: T, delay = 400) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // Search handler (debounced)
  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    // Log for development / future API integration
    console.log('Searching for:', value);
  };

  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 400),
    []
  );

  return (
    <header>
      <div className="header-brand">
        <a href="/" className="brand-link">
          <h1>
            Fit<span className="brand-highlight">Finder</span>
          </h1>
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="header-nav" aria-label="Main navigation">
        <a href="#opportunities" className="nav-link">Opportunities</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#open-source" className="nav-link">Open Source</a>
      </nav>

      {/* Desktop Search input */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search opportunities..."
          className="search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
          aria-label="Search opportunities"
        />
      </div>

      {/* Controls */}
      <div className="header-controls">
        <ThemeToggle />

        <a
          href="https://github.com/Code-Social/fitfinder"
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mobile-dropdown">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="mobile-search-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
            aria-label="Mobile search opportunities"
          />
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a
              href="#opportunities"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Opportunities
            </a>
            <a
              href="#how-it-works"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#open-source"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Open Source
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
