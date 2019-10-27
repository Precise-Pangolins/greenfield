import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuidv4';
import '@babel/polyfill';

import queryString from 'querystring';

let productId = queryString.parse(location.search)['?productId'] || 1;

function Thumbnails({ images = [], onThumbnailChange }) {
  return (
    <>
      <div>
        {images.map((thumbnail, index) => {
          return (
            <img
              onClick={() => {
                onThumbnailChange(index);
              }}
              key={uuid()}
              className='thumbnail'
              src={thumbnail.thumbnail_url}
              width='100'
              height='100'
            />
          );
        })}
      </div>
    </>
  );
}

export default Thumbnails;

// styles[0].photos[0].url
