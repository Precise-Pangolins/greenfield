import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import queryString from 'querystring';
import Carousel from 'react-image-gallery';
import $ from 'jquery';

import Thumbnails from './Thumbnails.jsx';
import StyleSelector from '../StyleSelector/index.jsx';

let productId = queryString.parse(location.search)['?productId'] || 1;

function ImgGallery({ currentStyle = {}, info, images = [] }) {
  currentStyle = images[0] || [];
  let [isFullScreen, setIsFullScreen] = useState(false);
  let image = useRef(null); // updating  won't initiate a  re-render
  let modifiedImgs = (currentStyle.photos || []).map(photo => {
    return { original: photo.url, thumbnail: photo.thumbnail_url };
  });

  function onMouseOver(e) {
    $('.tile').on('mousemove', function(e) {
      $(this).css({
        'transform-origin':
          ((e.pageX - $(this).offset().left) / $(this).width()) * 50 +
          '% ' +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 50 +
          '%'
      });
    });
  }

  function handleClick(event) {
    event.persist();
    if (isFullScreen) {
      console.log(event.target);
      const img = event.target;
      image.current = img;
      img.className = 'tile';
      if (img.style.transform === 'scale(2.5)') {
        img.style.transform = 'scale(1)';
        img.style.cursor = 'zoom-in';
        return;
      }
      img.style.transform = 'scale(2.5)';
      img.style.cursor = 'zoom-out';
      onMouseOver(event);
    }
  }

  function onScreenChange(fullScreenElem) {
    if (fullScreenElem) {
      setIsFullScreen(true);
      image.current.style.cursor = 'zoom-in';
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
