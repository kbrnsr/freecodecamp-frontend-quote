import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuoteBox from './QuoteBox';
import constants from '../constants';
import { testQuotes } from '../testConstants';

const {
  quoteBox, quoteText,
  quoteAuthor, quoteNewText, quoteTweet,
} = constants;

describe('Quotebox elements existence', () => {
  test('checks if all structural elements exists', async () => {
    render(<QuoteBox />);

    const wrapperElement = await screen.findByTestId(quoteBox);
    const textElement = await screen.findByTestId(quoteText);
    const authorElement = await screen.findByTestId(quoteAuthor);
    const newQuoteElement = await screen
      .findByRole('button', { name: quoteNewText });
    const tweetElement = await screen.findByTestId(quoteTweet);

    /* TODO Why do I need this... */
    await act(async () => {
    });

    expect(wrapperElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(newQuoteElement).toBeInTheDocument();
    expect(tweetElement).toBeInTheDocument();
  });
});

describe('Quotebox first load', () => {
  test('check if first loads of text and author appears', async () => {
    render(<QuoteBox />);
    const { defaultText, defaultAuthor } = constants;
    const textElement = await screen.findByTestId(quoteText);
    const authorElement = await screen.findByTestId(quoteAuthor);

    /* TODO Why do I need this... */
    await act(async () => {
    });

    expect(textElement).not.toHaveTextContent('');
    expect(textElement).not.toHaveTextContent(defaultText);
    expect(authorElement).not.toHaveTextContent('');
    expect(authorElement).not.toHaveTextContent(defaultAuthor);
  });
});

describe('Quotebox button', () => {
  test('check if new quote button works', async () => {
    render(<QuoteBox />);
    const user = userEvent.setup();
    const { text: text1, author: author1 } = testQuotes[0];
    const { text: text2, author: author2 } = testQuotes[1];
    // Generate regexes for quote texts and authors
    const textRegex = RegExp(`${text1}|${text2}`);
    const authorRegex = RegExp(`${author1}|${author2}`);
    const textElement = await screen.findByText(textRegex);
    const authorElement = await screen.findByText(authorRegex);

    const textOld = textElement.innerHTML;
    const authorOld = authorElement.innerHTML;
    await user.click(screen
      .getByRole('button', { name: quoteNewText }));
    expect(screen.queryByText(textOld)).not.toBeInTheDocument();
    expect(screen.queryByText(authorOld)).not.toBeInTheDocument();
  });
});
