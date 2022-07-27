import React, { useState, useEffect } from 'react';
import constants from '../constants';
import handlers from '../handlers/http';

function QuoteBox() {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteTweet,
    defaultText, defaultAuthor,
  } = constants;

  const [isLoading, setIsLoading] = useState(false);
  const [quoteContent, setQuoteContent] = useState(
    {
      text: defaultText,
      author: defaultAuthor,
    },
  );
  const [quotes, setQuotes] = useState([]);

  const setRandomQuote = () => {
    if (quotes.length > 0) {
      const quoteElem = quotes[Math.floor(Math.random() * quotes.length)];
      const {
        text, author,
      } = quoteElem;
      setQuoteContent({ text, author });
    }
  };

  useEffect(() => {
    const getQuotes = async () => {
      const res = await handlers.get('/');
      const { data } = res;
      setQuotes(data);
      setIsLoading(true);
      return data;
    };
    getQuotes();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setRandomQuote();
      setIsLoading(false);
    }
  }, [isLoading]);
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
        {quoteContent.text}
      </p>
      <p
        className="QuoteAuthor"
        data-testid={quoteAuthor}
        id={quoteAuthor}
      >
        {quoteContent.author}
      </p>
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
