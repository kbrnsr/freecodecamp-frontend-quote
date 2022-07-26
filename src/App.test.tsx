import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  let linkElement;
  await act(() => {
    linkElement = screen.getByText(/learn react/i);
  });
  expect(linkElement).toBeInTheDocument();
});
