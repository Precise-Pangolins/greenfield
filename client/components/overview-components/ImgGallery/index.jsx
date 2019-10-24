import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import getProdStyles from '../../../../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getStyles.js';
import '@babel/polyfill';

const imgSrc = `https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`;

function ImgGallery({ styles, handleGetStylesRequest }) {
  useEffect(() => {
    handleGetStylesRequest(1);
  }, []);

  return (
    <div>
      {styles.length > 0 ? <img src={styles[0].photos[0].url} /> : null}
      <p> WOOO!! Images Here!!</p>
    </div>
  );
}

export default ImgGallery;
