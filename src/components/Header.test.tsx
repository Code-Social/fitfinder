import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../contexts/ThemeContext';

const renderHeader = () => {
  return render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

describe('Header Component', () => {
  test('renders brand name and logo', () => {
    renderHeader();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/FitFinder/i);
  });

  test('renders navigation links', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /Opportunities/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /How It Works/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Open Source/i })).toBeInTheDocument();
  });

  test('renders desktop search input and accepts input', () => {
    renderHeader();
    const searchInputs = screen.getAllByPlaceholderText(/Search opportunities.../i);
    expect(searchInputs.length).toBeGreaterThan(0);
    fireEvent.change(searchInputs[0], { target: { value: 'hackathon' } });
    expect(searchInputs[0]).toHaveValue('hackathon');
  });

  test('renders theme toggle and GitHub repository link', () => {
    renderHeader();
    expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub Repository/i })).toBeInTheDocument();
  });

  test('toggles mobile menu on button click', () => {
    renderHeader();
    const menuButton = screen.getByRole('button', { name: /Open menu/i });
    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile search opportunities/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Close menu/i }));
    expect(screen.queryByLabelText(/Mobile search opportunities/i)).not.toBeInTheDocument();
  });
});
