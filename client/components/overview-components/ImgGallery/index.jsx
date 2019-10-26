import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';
import queryString from 'querystring';

let productId = queryString.parse(location.search)['?product'] || 1;

function ImgGallery({ styles, handleGetStylesRequest }) {
  useEffect(() => {
    handleGetStylesRequest(productId);
  }, []);

  return (
    <>
      <div>
        <img src={styles[0].photos[0].url} />
      </div>
    </>
  );
}

export default ImgGallery;
