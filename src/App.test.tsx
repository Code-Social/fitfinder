import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders hero section and headings', () => {
    render(<App />);
    expect(screen.getByText(/Find Opportunities Meant for You/i)).toBeInTheDocument();
    expect(screen.getByText(/What Can You Discover\?/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /How It Works/i })).toBeInTheDocument();
  });

  test('renders action buttons and smooth scroll triggers', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    render(<App />);
    const learnMoreBtn = screen.getByRole('button', { name: /Learn More/i });
    expect(learnMoreBtn).toBeInTheDocument();
    fireEvent.click(learnMoreBtn);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    const startContributingBtn = screen.getByRole('button', { name: /Start Contributing/i });
    expect(startContributingBtn).toBeInTheDocument();
    fireEvent.click(startContributingBtn);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('toggles theme when theme toggle is clicked', () => {
    render(<App />);
    const themeToggleBtn = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggleBtn).toBeInTheDocument();
    fireEvent.click(themeToggleBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
