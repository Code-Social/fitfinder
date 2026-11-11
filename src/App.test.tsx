import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('FitFinder App', () => {
  test('renders hero title and brand logo', () => {
    render(<App />);
    expect(screen.getByText(/FitFinder/i)).toBeInTheDocument();
    expect(screen.getByText(/Find Opportunities Meant for You/i)).toBeInTheDocument();
  });

  test('renders navigation and header actions including theme toggle', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /switch to dark theme/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search scholarships, hackathons.../i)).toBeInTheDocument();
  });

  test('renders all opportunity filter pills', () => {
    render(<App />);
    expect(screen.getByRole('tab', { name: /^All$/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^Scholarships$/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^Hackathons$/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /^Conferences$/i })).toBeInTheDocument();
  });

  test('filters opportunities when category pill is selected', () => {
    render(<App />);
    const hackathonsTab = screen.getByRole('tab', { name: /^Hackathons$/i });
    fireEvent.click(hackathonsTab);

    expect(screen.getByText(/coding competitions and challenges/i)).toBeInTheDocument();
    expect(screen.queryByText(/Find merit-based and need-based academic grants/i)).not.toBeInTheDocument();
  });

  test('allows toggling bookmarks for opportunities', () => {
    render(<App />);
    const bookmarkButtons = screen.getAllByTitle(/Save opportunity/i);
    expect(bookmarkButtons.length).toBeGreaterThan(0);

    // Click first bookmark button
    fireEvent.click(bookmarkButtons[0]);

    // Should update to remove from saved
    expect(screen.getByTitle(/Remove from saved/i)).toBeInTheDocument();
  });
});
