import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';
// import Thumbnails from './Thumbnails';

function ImgGallery({ styles, handleGetStylesRequest }) {
  useEffect(() => {
    handleGetStylesRequest(1);
  }, []);

  return (
    <>
      <div>
        {styles.length > 0 ? <img src={styles[0].photos[0].url} /> : null}
      </div>
      {/* <Thumbnails /> */}
    </>
  );
}

export default ImgGallery;
