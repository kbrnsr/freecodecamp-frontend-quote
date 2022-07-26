import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  await act(async () => {
    const linkElement = await screen.findByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
