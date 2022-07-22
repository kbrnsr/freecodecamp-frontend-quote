import React from 'react';
import { render } from '@testing-library/react';
import QuoteBox from './QuoteBox';

describe('QuoteBox component', () => {
  test('renders the main quote box', () => {
    render(<QuoteBox />);
  });
});
