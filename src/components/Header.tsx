import { useState } from "react";
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {  
 const [isOpen, setIsOpen] = useState(false);
 return (
    <header>
      <nav className="bg-white shadow-md px-4 py-3 md:px-8 md:py-4">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div className="text-2xl font-bold">FitFinder</div>

    {/* Hamburger Button for Mobile */}
    <button
      className="text-3xl md:hidden focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "✕" : "☰"}
    </button>

    {/* Desktop Links */}
    <ul className="hidden md:flex space-x-6 font-medium">
      <li><a href="/" className="hover:text-blue-500">Home</a></li>
      <li><a href="/about" className="hover:text-blue-500">About</a></li>
      <li><a href="/features" className="hover:text-blue-500">Features</a></li>
      <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
    </ul>
  </div>

  {/* Mobile Links */}
  {isOpen && (
    <ul className="flex flex-col mt-4 space-y-3 md:hidden font-medium">
      <li><a href="/" className="hover:text-blue-500">Home</a></li>
      <li><a href="/about" className="hover:text-blue-500">About</a></li>
      <li><a href="/features" className="hover:text-blue-500">Features</a></li>
      <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
    </ul>
  )}
</nav>

    </header>
  );
};

export default Header;