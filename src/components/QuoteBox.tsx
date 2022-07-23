import React from 'react';
import constants from './constants';

function QuoteBox() {
  return (
    <div
      className="QuoteBox"
      data-testid={constants.quoteBox}
      id={constants.quoteBox}
    >
      <div
        className="QuoteText"
        data-testid={constants.quoteText}
        id={constants.quoteText}
      />
      <div
        className="QuoteAuthor"
        data-testid={constants.quoteAuthor}
        id={constants.quoteAuthor}
      />
      <button
        aria-label={constants.quoteNew}
        type="submit"
        className="QuoteNew"
        data-testid={constants.quoteNew}
        id={constants.quoteNew}
      />
      <a
        href="index"
        data-testid={constants.quoteTweet}
        id={constants.quoteTweet}
      >
        Tweet
      </a>
    </div>
  );
}

export default QuoteBox;
