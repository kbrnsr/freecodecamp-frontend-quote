import React from 'react';
import { render, screen, act } from '@testing-library/react';
import QuoteBox from './QuoteBox';
import constants from '../constants';
import { testQuotes } from '../testConstants';

const {
  quoteBox, quoteText,
  quoteAuthor, quoteNew, quoteTweet,
} = constants;

describe('QuoteBox tests', () => {
  test('checks if all structural elements exists', async () => {
    let wrapperElement;
    let textElement;
    let authorElement;
    let newQuoteElement;
    let tweetElement;

    render(<QuoteBox />);

    await act(async () => {
      wrapperElement = await screen.findByTestId(quoteBox);
      textElement = await screen.findByTestId(quoteText);
      authorElement = await screen.findByTestId(quoteAuthor);
      newQuoteElement = await screen.findByTestId(quoteNew);
      tweetElement = await screen.findByTestId(quoteTweet);
    });
    expect(wrapperElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(newQuoteElement).toBeInTheDocument();
    expect(tweetElement).toBeInTheDocument();
  });
  test('check if first loads of text and author appears', async () => {
    render(<QuoteBox />);
    const { defaultText, defaultAuthor } = constants;
    let textElement;
    let authorElement;
    // eslint-disable-next-line no-unused-vars
    const { text: text1, author: author1 } = testQuotes[0];
    // const { text: text2, author: author2 } = quotes[0];
    await act(async () => {
      textElement = await screen.findByTestId(quoteText);
      authorElement = await screen.findByTestId(quoteAuthor);
    });
    expect(textElement).not.toHaveTextContent('');
    expect(textElement).not.toHaveTextContent(defaultText);
    expect(authorElement).not.toHaveTextContent('');
    expect(authorElement).not.toHaveTextContent(defaultAuthor);
  });
});
