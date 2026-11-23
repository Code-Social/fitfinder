import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../contexts/ThemeContext';

describe('Header component', () => {
  const renderHeader = () => {
    return render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
  };

  test('renders brand title FitFinder', () => {
    renderHeader();
    expect(screen.getByText('FitFinder')).toBeInTheDocument();
  });

  test('renders search input and allows typing', () => {
    renderHeader();
    const searchInputs = screen.getAllByPlaceholderText('Search opportunities...');
    expect(searchInputs.length).toBeGreaterThan(0);

    fireEvent.change(searchInputs[0], { target: { value: 'Frontend Developer' } });
    expect(searchInputs[0]).toHaveValue('Frontend Developer');
  });

  test('renders theme toggle and github link', () => {
    renderHeader();
    expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github repository/i })).toBeInTheDocument();
  });

  test('toggles mobile menu on menu button click', () => {
    renderHeader();
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(toggleButton).toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(screen.getByText('Opportunities')).toBeInTheDocument();
    expect(screen.getByText('Scholarships')).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    expect(screen.queryByText('Opportunities')).not.toBeInTheDocument();
  });
});
