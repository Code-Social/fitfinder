import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with header, hero section, and opportunity cards', () => {
  render(<App />);
  expect(screen.getByText('FitFinder')).toBeInTheDocument();
  expect(screen.getByText('Find Opportunities Meant for You')).toBeInTheDocument();
  expect(screen.getByText('Start Contributing')).toBeInTheDocument();
});
