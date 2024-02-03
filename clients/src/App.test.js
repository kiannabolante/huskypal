import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Closet component for /user/accessories route', () => {
  render(<App />);
  const closetElement = screen.getByText(/Closet/i);
  expect(closetElement).toBeInTheDocument();
});

test('renders the Tracker component for /user/level route', () => {
  render(<App />);
  const trackerElement = screen.getByText(/Tracker/i);
  expect(trackerElement).toBeInTheDocument();
});
