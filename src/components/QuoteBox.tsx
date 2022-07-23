import React from 'react';
import constants from './constants';

function QuoteBox() {
  return (
    <div className="QuoteBox" data-testid={constants.quoteBox} id={constants.quoteBox}>
      <div className="QuoteText" data-testid={constants.quoteText} id={constants.quoteText} />
      <div className="QuoteAuthor" data-testid={constants.quoteAuthor} id={constants.quoteAuthor} />
      <button type="submit" className="QuoteNew" data-testid={constants.quoteNew} id={constants.quoteNew} />
    </div>
  );
}

export default QuoteBox;
