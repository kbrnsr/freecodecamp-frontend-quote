import React, { useState, useEffect } from 'react';
import constants from '../constants';
import handlers from '../handlers/http';

function QuoteBox() {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteTweet,
    defaultText,
  } = constants;

  const [textContent, setTextContent] = useState(defaultText);
  const [quotes, setQuotes] = useState([]);

  const setRandomQuote = () => {
    if (quotes.length > 0) {
      const quoteElem = quotes[Math.floor(Math.random() * quotes.length)];
      const {
        // eslint-disable-next-line no-unused-vars
        text, author,
      } = quoteElem;
      setTextContent(text);
    }
  };

  useEffect(() => {
    const getQuotes = async () => {
      const res = await handlers.get('/');
      setQuotes(res.data);
    };
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes !== undefined) {
      setRandomQuote();
    }
  }, [quotes]);
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
