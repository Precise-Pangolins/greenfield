import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';
import queryString from 'querystring';

let productId = queryString.parse(location.search)['?productId'] || 1;

function ProductDescription({ info, handleGetInfoRequest }) {
  useEffect(() => {
    handleGetInfoRequest(productId);
  }, []);
  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '50px' }}>{info.name}</div>
      <div style={{ fontWeight: 'bold', fontSize: '30px' }}>{info.slogan}</div>
      <div>{info.description}</div>
    </div>
  );
}

export default ProductDescription;
