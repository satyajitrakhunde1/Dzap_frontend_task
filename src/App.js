
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TokenList from './components/TokenList';
import QuoteForm from './components/QuoteForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>XY Finance Token Bridge</h1>
          <Link to="/get-quote">
            <button className="get-quote-button">Get Quote</button>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<TokenList />} />
          <Route path="/get-quote" element={<QuoteForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


