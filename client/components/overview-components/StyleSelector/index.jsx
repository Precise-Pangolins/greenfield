import React from 'react';
import uuid from 'uuidv4';
import Scrollspy from 'react-scrollspy';
import {
  PinterestShareButton,
  TwitterShareButton,
  FacebookShareButton
} from 'react-share';
import queryString from 'querystring';

import StarRatings from '../../../../src/redux/containers/RatingContainers/StarRatingsContainer.js';

let productId = queryString.parse(location.search)['?productId'] || 1;

function StyleSelector({
  currentStyle,
  currentStyleId,
  styles,
  onHandleStyleChange,
  info = {},
  metaData = {}
}) {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      {Object.keys(metaData).length > 0 ? (
        <StarRatings metaData={metaData} />
      ) : null}
      <Scrollspy
        style={{ transitionTimingFunction: 'ease-in-out' }}
        items={['ratings-reviews']}
        currentClassName='is-current'>
        <a className='scroll-spy' href='#ratings-reviews'>
          Read Reviews
        </a>
      </Scrollspy>
      <div className='social-media-fb'>
        <a className='social-media-fb-color' href='https://www.facebook.com'>
          <i class='fab fa-facebook'></i>
        </a>
      </div>
      <div className='social-media-twitter'>
        <a
          className='social-media-twitter-color'
          href='https://www.twitter.com'>
          <i class='fab fa-twitter'></i>
        </a>
      </div>
      <div className='social-media-pinterest'>
        {/* <PinterestShareButton
          url={`localhost:3000/?productId${productId}`}
          media={styles.data ? styles.data[0].photos[0].url : null}
        /> */}
        <a
          className='social-media-pinterest-color'
          href='https://www.pinterest.com'>
          <i class='fab fa-pinterest'></i>
        </a>
      </div>
      <div style={{ display: 'flex', flex: 'wrap' }}>
        {styles.data
          ? styles.data.map(style => {
              return (
                <div
                  style={{
                    position: 'relative',
                    margin: '12px'
                  }}>
                  <img
                    key={uuid()}
                    onClick={() => {
                      console.log({ styleId: style.style_id });
                      onHandleStyleChange(style.style_id);
                    }}
                    src={style.photos[0].thumbnail_url}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%'
                    }}
                  />
                  {style.style_id === currentStyleId ? (
                    <div>
                      <span className='check-mark'>☑</span>
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default StyleSelector;
