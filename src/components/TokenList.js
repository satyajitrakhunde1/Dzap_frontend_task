
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TokenList.css';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('https://dzap-backend-task.onrender.com/tokens');
        setTokens(response.data);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTokens();
  }, []);

  return (
    <div className="token-list">
      <h2 style={{color:"blue"}}>Supported Tokens</h2>
      {loading ? (
        <div style={{color:"black",fontWeight:"bolder"}}>Loading...</div>
      ) : (
        <ul>
          {tokens.map((token) => (
            <li key={token.address} className="token-item">
              <img src={token.logoURI} alt={token.name} className="token-logo" />
              <div className="token-details">
                <h3>{token.name} ({token.symbol})</h3>
                <p>Chain ID: {token.chainId}</p>
                <p>Decimals: {token.decimals}</p>
                <p>Address: {token.address}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TokenList;

