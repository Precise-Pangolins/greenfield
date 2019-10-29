import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuidv4';

import queryString from 'querystring';

let productId = queryString.parse(location.search)['?productId'] || 1;

function Thumbnails({ images = [], onThumbnailChange }) {
  const [clicked, setClicked] = React.useState({ start: false });

  const setBorder = index => {
    clicked[JSON.stringify(index)]
      ? setClicked((clicked[index] = false))
      : setClicked((clicked[index] = true));
  };

  useEffect(() => {
    setBorder(0);
  }, []);

  const outline = index => {
    index = JSON.stringify(index);
    if (clicked.index) {
      return {
        outlineColor: 'black',
        outlineWidth: '20',
        outlineStyle: 'solid'
      };
    } else {
      return;
    }
  };

  return (
    <>
      <div>
        {images.map((thumbnail, index) => {
          return (
            <img
              style={outline(index)}
              onClick={() => {
                onThumbnailChange(index);
                setBorder(JSON.stringify(index));
              }}
              key={uuid()}
              className='thumbnail'
              src={thumbnail.thumbnail_url}
              width='100'
              height='100'
              alt='thumbnail image of selected style'
            />
          );
        })}
      </div>
    </>
  );
}

export default Thumbnails;
