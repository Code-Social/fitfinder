import React, { useState, useMemo } from "react";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export default function Header({ searchQuery = "", onSearchChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(searchQuery);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Debounce utility
  function debounce<T extends (...args: any[]) => void>(fn: T, delay = 350) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        if (onSearchChange) {
          onSearchChange(val);
        }
      }, 350),
    [onSearchChange]
  );

  const handleInputChange = (val: string) => {
    setQuery(val);
    debouncedSearch(val);
  };

  return (
    <header className="site-header">
      {/* Brand */}
      <div className="header-brand">
        <a href="#" className="brand-link">
          <span className="brand-logo" role="img" aria-label="Target">🎯</span>
          <span className="brand-highlight">FitFinder</span>
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="header-nav hidden md:flex" aria-label="Main Navigation">
        <a href="#opportunities" className="nav-link">Opportunities</a>
        <a href="#how-it-works" className="nav-link">How It Works</a>
        <a href="#open-source" className="nav-link">Open Source</a>
      </nav>

      {/* Desktop Search input */}
      <div className="header-search hidden md:block">
        <input
          type="text"
          placeholder="Search opportunities..."
          className="search-input"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          aria-label="Search opportunities"
        />
      </div>

      {/* Controls */}
      <div className="header-controls">
        <ThemeToggle />

        <a
          href="https://github.com/Code-Social/fitfinder"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
          title="View on GitHub"
          aria-label="GitHub Repository"
        >
          <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="mobile-dropdown md:hidden">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="mobile-search-input"
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            aria-label="Mobile search opportunities"
          />

          <ul className="mobile-nav-list">
            <li>
              <a
                href="#opportunities"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                🎓 Opportunities
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                ⚙️ How It Works
              </a>
            </li>
            <li>
              <a
                href="#open-source"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                🌟 Open Source
              </a>
            </li>
          </ul>

          <div className="mobile-controls-row">
            <span>Appearance Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
