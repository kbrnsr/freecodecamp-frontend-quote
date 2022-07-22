import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteBox from './QuoteBox';
import constants from './constants';

describe('QuoteBox component', () => {
  test('check if quote box wrapper exists', () => {
    render(<QuoteBox />);
    const wrapperElement = screen.queryByTestId(constants.quoteBox);
    expect(wrapperElement).toBeInTheDocument();
  });
  test('check if quote box text exists', () => {
    render(<QuoteBox />);
    const textElement = screen.queryByTestId(constants.quoteText);
    expect(textElement).toBeInTheDocument();
  });
});
