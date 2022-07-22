import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteBox from './QuoteBox';
import constants from './constants';

describe('QuoteBox component', () => {
  test('check if quotebox wrapper exists', () => {
    render(<QuoteBox />);
    const wrapperElement = screen.queryByTestId(constants.quoteBox);
    expect(wrapperElement).toBeInTheDocument();
  });
});
