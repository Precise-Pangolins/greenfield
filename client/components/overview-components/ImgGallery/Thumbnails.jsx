import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import '@babel/polyfill';

function Thumbnails({ styles, handleGetThumbnailsRequest }) {
  useEffect(() => {
    handleGetThumbnailsRequest(1);
  }, []);
  return (
    <>
      <div>
        {styles.length
          ? styles[0].photos.map(thumbnail => {
              return (
                <img
                  class='thumbnail'
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
