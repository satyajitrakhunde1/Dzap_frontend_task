
import React from 'react';
import './ConfirmationScreen.css'; // Ensure you have a CSS file for styling

const ConfirmationScreen = ({ params, onClose }) => {
  return (
    <div className="confirmation-screen">
      <div className="confirmation-content">
        <h2>Transaction Parameters</h2>
        <div className="transaction-param">
          <p><strong>Token Address:</strong> {params.tokenAddress}</p>
          <p><strong>Spender:</strong> {params.spender}</p>
          <p><strong>Amount:</strong> {params.amount}</p>
          <h3>Transaction Details</h3>
          <p><strong>To:</strong> {params.tx.to}</p>
          <p><strong>Data:</strong> {params.tx.data}</p>
          <p><strong>Value:</strong> {params.tx.value}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
