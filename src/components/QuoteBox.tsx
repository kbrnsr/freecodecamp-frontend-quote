import React, { useState } from 'react';
import constants from './constants';

function QuoteBox() {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteTweet,
    defaultText,
  } = constants;

  // eslint-disable-next-line no-unused-vars
  const [textContent, setTextContent] = useState(defaultText);

  return (
    <div
      className="QuoteBox"
      data-testid={quoteBox}
      id={quoteBox}
    >
      <p
        className="QuoteText"
        data-testid={quoteText}
        id={quoteText}
      >
        {textContent}
      </p>
      <div
        className="QuoteAuthor"
        data-testid={quoteAuthor}
        id={quoteAuthor}
      />
      <button
        aria-label={quoteNew}
        type="submit"
        className="QuoteNew"
        data-testid={quoteNew}
        id={quoteNew}
      />
      <a
        href="index"
        data-testid={quoteTweet}
        id={quoteTweet}
      >
        Tweet
      </a>
    </div>
  );
}

export default QuoteBox;
