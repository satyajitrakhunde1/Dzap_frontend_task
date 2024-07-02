

import React, { useState } from 'react';
import axios from 'axios';
import ConfirmationScreen from './ConfirmationScreen';
import './TransactionParams.css'; // Ensure you have a CSS file for styling

const TransactionParams = ({ quote }) => {
  const [params, setParams] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBridge = async () => {
    try {
      const response = await axios.post('https://dzap-backend-task.onrender.com/params', {
        tokenAddress: quote.routes[0].srcQuoteTokenAddress,
        spender: quote.routes[0].dstQuoteTokenAddress,
        amount: quote.routes[0].srcQuoteTokenAmount
      });
      setParams(response.data);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error fetching transaction params:', error);
    }
  };

  return (
    <div className="transaction-params">
      <h1>Transaction Details</h1>
      {quote.routes.map((route, index) => (
        <div key={index} className="route-details">
          <h2>Route {index + 1}</h2>
          <div>
            <h3>Source</h3>
            <p>Chain ID: {route.srcChainId}</p>
            <p>Quote Token Address: {route.srcQuoteTokenAddress}</p>
            <p>Quote Token Amount: {route.srcQuoteTokenAmount}</p>
          </div>
          <div>
            <h3>Destination</h3>
            <p>Chain ID: {route.dstChainId}</p>
            <p>Quote Token Address: {route.dstQuoteTokenAddress}</p>
            <p>Quote Token Amount: {route.dstQuoteTokenAmount}</p>
          </div>
          <div>
            <h3>Swap Description</h3>
            <p>Provider: {route.srcSwapDescription.provider}</p>
            <p>Source Token: {route.srcSwapDescription.srcTokenAddress}</p>
            <p>Destination Token: {route.srcSwapDescription.dstTokenAddress}</p>
            <p>Source Amount: {route.srcSwapDescription.srcTokenAmount}</p>
            <p>Destination Amount: {route.srcSwapDescription.dstTokenAmount}</p>
          </div>
          <div>
            <h3>Bridge Description</h3>
            <p>Provider: {route.bridgeDescription.provider}</p>
            <p>Bridge Contract: {route.bridgeDescription.bridgeContractAddress}</p>
            <p>Bridge Fee: {route.bridgeDescription.bridgeFeeAmount} {route.bridgeDescription.bridgeFeeToken.symbol}</p>
          </div>
          <div>
            <h3>Destination Swap Description</h3>
            <p>Provider: {route.dstSwapDescription.provider}</p>
            <p>Source Token: {route.dstSwapDescription.srcTokenAddress}</p>
            <p>Destination Token: {route.dstSwapDescription.dstTokenAddress}</p>
            <p>Source Amount: {route.dstSwapDescription.srcTokenAmount}</p>
            <p>Destination Amount: {route.dstSwapDescription.dstTokenAmount}</p>
          </div>
        </div>
      ))}
      <button onClick={handleBridge}>Bridge</button>
      {showConfirmation && params && (
        <ConfirmationScreen params={params} onClose={() => setShowConfirmation(false)} />
      )}
    </div>
  );
};

export default TransactionParams;
