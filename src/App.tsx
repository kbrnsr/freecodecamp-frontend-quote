import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  const codeString = 'Edit <code>src/App.tsx</code> and save to reload.';
  return (
    <div className="App">
      <QuoteBox />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {codeString}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
