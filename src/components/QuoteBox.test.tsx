import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteBox from './QuoteBox';
import constants from '../constants';

describe('QuoteBox structure tests', () => {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteTweet,
  } = constants;

  beforeEach(() => {
    render(<QuoteBox />);
  });

  test('check if wrapper element exists', () => {
    const wrapperElement = screen.queryByTestId(quoteBox);
    expect(wrapperElement).toBeInstanceOf(HTMLElement);
  });
  test('check if text element exists', () => {
    const textElement = screen.queryByTestId(quoteText);
    expect(textElement).toBeInstanceOf(HTMLElement);
  });
  test('check if author element exists', () => {
    const authorElement = screen.queryByTestId(quoteAuthor);
    expect(authorElement).toBeInstanceOf(HTMLElement);
  });
  test('check if new quote element exists', () => {
    const newQuoteElement = screen.queryByTestId(quoteNew);
    expect(newQuoteElement).toBeInstanceOf(HTMLElement);
  });
  test('check if tweet element exists', () => {
    const tweetElement = screen.queryByTestId(quoteTweet);
    expect(tweetElement).toBeInstanceOf(HTMLElement);
  });
});
