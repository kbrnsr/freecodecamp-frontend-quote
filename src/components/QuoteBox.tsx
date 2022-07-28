import React, { useState, useEffect } from 'react';
import constants from '../constants';
import handlers from '../handlers/http';

function QuoteBox() {
  const {
    quoteBox, quoteText,
    quoteAuthor, quoteNew, quoteNewText, quoteTweet,
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
      let quoteNotTheSame = false;
      const { text: oldText, author: oldAuthor } = quoteContent;
      while (!quoteNotTheSame) {
        const quoteElem = quotes[Math.floor(Math.random() * quotes.length)];
        const {
          text: newText, author: newAuthor,
        } = quoteElem;
        if ((oldText !== newText) && (oldAuthor !== newAuthor)) {
          setQuoteContent({ text: newText, author: newAuthor });
          quoteNotTheSame = true;
        }
      }
    }
  };
  const handleNewQuote = () => {
    setRandomQuote();
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
        onClick={() => handleNewQuote()}
        className="QuoteNew"
        data-testid={quoteNew}
        id={quoteNew}
        type="button"
      >
        {quoteNewText}
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        data-testid={quoteTweet}
        id={quoteTweet}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default QuoteBox;
