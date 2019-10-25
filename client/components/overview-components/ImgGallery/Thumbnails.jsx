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
                <img src={thumbnail.thumbnail_url} width='100' height='100' />
              );
            })
          : [
              <img
                src={
                  'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
                }
                width='100'
                height='100'
              />
            ]}
      </div>
    </>
  );
}

export default Thumbnails;

// styles[0].photos[0].url
