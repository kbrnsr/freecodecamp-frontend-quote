import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import QuoteBox from './QuoteBox';
import constants from '../constants';
// import testConstants from '../testConstants';

describe('QuoteBox structure tests', () => {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteTweet,
  } = constants;

  test('checks if all structural elements exists', async () => {
    render(<QuoteBox />);
    await act(async () => {
      const wrapperElement = await screen.findByTestId(quoteBox);
      expect(wrapperElement).toBeInTheDocument();

      const textElement = await screen.findByTestId(quoteText);
      expect(textElement).toBeInstanceOf(HTMLElement);

      const authorElement = await screen.findByTestId(quoteAuthor);
      expect(authorElement).toBeInstanceOf(HTMLElement);

      const newQuoteElement = await screen.findByTestId(quoteNew);
      expect(newQuoteElement).toBeInstanceOf(HTMLElement);

      const tweetElement = await screen.findByTestId(quoteTweet);
      expect(tweetElement).toBeInstanceOf(HTMLElement);
    });
  });
});

// describe('Quotebox first load tests', () => {
//  beforeEach(() => {
//    render(<QuoteBox />);
//  });
//  test('check if first loads of text and author appears', async () => {
/// / Render components, perform requests, receive mocked responses.
// const { testQuotes } = testConstants;
// eslint-disable-next-line no-unused-vars
// const { text: text1, author: author1 } = testQuotes[0];
// const { text: text2, author: author2 } = quotes[0];
// expect(screen.getByText(text1)).toBeInTheDocument();
//  });
// });
