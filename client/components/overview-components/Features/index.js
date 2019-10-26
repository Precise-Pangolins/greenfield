import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';
import queryString from 'querystring';

let productId = queryString.parse(location.search)['?productId'] || 1;

function Features({ info, handleGetInfoRequest }) {
  useEffect(() => {
    handleGetInfoRequest(productId);
  }, []);
  return (
    <div>
      {info.features ? (
        <div>
          {info.features.map(feature => {
            return <div>{feature.feature}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Features;
