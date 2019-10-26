import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

import queryString from 'querystring';

let productId = queryString.parse(location.search)['?product'] || 1;

function Thumbnails({ styles, handleGetThumbnailsRequest }) {
  useEffect(() => {
    handleGetThumbnailsRequest(productId);
  }, []);
  return (
    <>
      <div>
        {styles.length
          ? styles[0].photos.map(thumbnail => {
              return (
                <img
                  className='thumbnail'
                  src={thumbnail.thumbnail_url}
                  width='100'
                  height='100'
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default Thumbnails;

// styles[0].photos[0].url
