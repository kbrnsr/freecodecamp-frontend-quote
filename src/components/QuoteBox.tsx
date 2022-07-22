import React from 'react';
import constants from './constants';

function QuoteBox() {
  return (
    <div className="QuoteBox" data-testid={constants.quoteBox} id={constants.quoteBox}>
      <div className="QuoteText" data-testid={constants.quoteText} id={constants.quoteText}>
        <p />
      </div>
    </div>
  );
}

export default QuoteBox;
