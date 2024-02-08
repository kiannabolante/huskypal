// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders the Closet component for /user/accessories route', () => {
//   render(<App />);
//   const closetElement = screen.getByText(/Closet/i);
//   expect(closetElement).toBeInTheDocument();
// });

// test('renders the Tracker component for /user/level route', () => {
//   render(<App />);
//   const trackerElement = screen.getByText(/Tracker/i);
//   expect(trackerElement).toBeInTheDocument();
// });

// test('renders the Homepage component for /user/homepage route', () => {
//   render(<App />);
//   const homepageElement = screen.getByText(/Homepage/i);
//   expect(homepageElement).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import App from './App';

test('renders the Closet component for /user/accessories route', () => {
  render(
    <MemoryRouter initialEntries={['/user/accessories']}> // Simulate navigation to /user/accessories
      <App />
    </MemoryRouter>
  );
  const closetElement = screen.getByText(/Closet/i);
  expect(closetElement).toBeInTheDocument();
});

test('renders the Tracker component for /user/level route', () => {
  render(
    <MemoryRouter initialEntries={['/user/level']}> // Simulate navigation to /user/level
      <App />
    </MemoryRouter>
  );
  const trackerElement = screen.getByText(/Tracker/i);
  expect(trackerElement).toBeInTheDocument();
});

test('renders the Homepage component for /user/homepage route', () => {
  render(
    <MemoryRouter initialEntries={['/user/homepage']}> // Simulate navigation to /user/homepage
      <App />
    </MemoryRouter>
  );
  const homepageElement = screen.getByText(/Homepage/i);
  expect(homepageElement).toBeInTheDocument();
});

