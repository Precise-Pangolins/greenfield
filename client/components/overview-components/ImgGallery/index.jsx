import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import queryString from 'querystring';
import Carousel from 'react-image-gallery';

import Thumbnails from './Thumbnails.jsx';
import StyleSelector from '../StyleSelector/index.jsx';

let productId = queryString.parse(location.search)['?productId'] || 1;

function ImgGallery({ currentStyle = {}, info }) {
  let [isFullScreen, setIsFullScreen] = useState(false);
  let image = useRef(null); // updating  won't initiate a  re-render
  let modifiedImgs = (currentStyle.photos || []).map(photo => {
    return { original: photo.url, thumbnail: photo.thumbnail_url };
  });

  function handleClick(event) {
    if (isFullScreen) {
      const img = event.target;
      image.current = img;
      if (img.style.transform === 'scale(2.5)') {
        img.style.transform = 'scale(1)';
        return;
      }
      img.style.transform = 'scale(2.5)';
    }
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true);
      image.current.style.cursor = 'cell';
    } else {
      setIsFullScreen(false);
      image.current.style.transform = 'scale(1)';
      image.current.style.cursor = 'auto';
    }
  }
  return (
    <Carousel
      onScreenChange={onScreenChange}
      showBullets={true}
      onClick={handleClick}
      items={modifiedImgs}
    />
  );
}

export default ImgGallery;
