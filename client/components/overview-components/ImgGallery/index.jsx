import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'querystring';

import Thumbnails from './Thumbnails.jsx';
import StyleSelector from '../StyleSelector/index.jsx';

let productId = queryString.parse(location.search)['?productId'] || 1;

function ImgGallery({ styles = [], onStyleChange, styleId }) {
  let [currentStyleId, setCurrentStyleId] = useState(styleId);
  let [thmbIndex, setThmbIndex] = useState(0);

  console.log(currentStyleId, styles);
  const currentStyle = styles.find(
    style => style.style_id === currentStyleId
  ) || { photos: [] };

  const handleStyleChange = id => {
    setCurrentStyleId(id);
    //have style id, update current style id
    const currentStyle = styles.find(style => style.style_id === id);
    //pass entire style object to this parent
    onStyleChange(currentStyle);
    // call some method on the parent component to inform of a style change
  };

  const handleThumbnailChange = index => {
    setThmbIndex(index);
  };

  return (
    <>
      <div>
        {currentStyle.photos.length ? (
          <img
            style={{ width: '50%' }}
            className='newStyle'
            src={currentStyle.photos[thmbIndex].url}
          />
        ) : null}
      </div>
      <StyleSelector onHandleStyleChange={handleStyleChange} styles={styles} />
      <Thumbnails
        images={currentStyle.photos}
        onThumbnailChange={handleThumbnailChange}
      />
    </>
  );
}

export default ImgGallery;
