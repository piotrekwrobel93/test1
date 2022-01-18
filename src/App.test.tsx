import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Coding comes soon! Devops needs first :D/i);
  expect(linkElement).toBeInTheDocument();
});
