


import React, { useState } from 'react';
import axios from 'axios';
import TransactionParams from './TransactionParams';

const initialFormData = {
  srcChainId: 1,
  srcQuoteTokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  srcQuoteTokenAmount: '1000000000000000000',
  dstChainId: 56,
  dstQuoteTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  slippage: 1
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://dzap-backend-task.onrender.com/quotes', formData);
      if (response.data.success) {
        setQuote(response.data);
        setError('');
      } else {
        setError(response.data.errorMsg);
        setQuote(null); // Clear previous quote if any
      }
    } catch (err) {
      setError('Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-form">
      <form onSubmit={handleSubmit}>
        <label>
          Source Chain ID:
          <input type="number" name="srcChainId" value={formData.srcChainId} onChange={handleChange} required />
        </label>
        <label>
          Source Quote Token Address:
          <input type="text" name="srcQuoteTokenAddress" value={formData.srcQuoteTokenAddress} onChange={handleChange} required />
        </label>
        <label>
          Source Quote Token Amount:
          <input type="text" name="srcQuoteTokenAmount" value={formData.srcQuoteTokenAmount} onChange={handleChange} required />
        </label>
        <label>
          Destination Chain ID:
          <input type="number" name="dstChainId" value={formData.dstChainId} onChange={handleChange} required />
        </label>
        <label>
          Destination Quote Token Address:
          <input type="text" name="dstQuoteTokenAddress" value={formData.dstQuoteTokenAddress} onChange={handleChange} required />
        </label>
        <label>
          Slippage:
          <input type="number" name="slippage" value={formData.slippage} onChange={handleChange} required />
        </label>
        <button type="submit">Get Quote</button>
      </form>
      {loading && <div tyle={{color:"red",display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {quote && quote.success && (
        <TransactionParams quote={quote} />
      )}
    </div>
  );
};

export default QuoteForm;
