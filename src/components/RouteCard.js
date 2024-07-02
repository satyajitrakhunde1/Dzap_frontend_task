// RouteCard.jsx
import React from 'react';

const RouteCard = ({ route }) => {
  return (
    <div className="route-card">
      <h3>Route Details</h3>
      <p>Source Chain ID: {route.srcChainId}</p>
      <p>Source Quote Token Address: {route.srcQuoteTokenAddress}</p>
      <p>Source Quote Token Amount: {route.srcQuoteTokenAmount}</p>
      <p>Destination Chain ID: {route.dstChainId}</p>
      <p>Destination Quote Token Address: {route.dstQuoteTokenAddress}</p>
      <p>Slippage: {route.slippage}</p>
      {/* Add more details from route as needed */}
    </div>
  );
};

export default RouteCard;
