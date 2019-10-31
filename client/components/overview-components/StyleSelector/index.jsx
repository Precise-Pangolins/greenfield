import React from 'react';
import uuid from 'uuidv4';
import Scrollspy from 'react-scrollspy';
import {
  PinterestShareButton,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon
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
        <FacebookShareButton
          url={`http://127.0.0.1:3000/?productId=${productId}`}
          text='check out this fabulous piece I found on Noods!'
          media={styles.data ? styles.data[0].photos[0].url : null}
          children={<FacebookIcon size={32} round={true} />}
        />
      </div>
      <div className='social-media-twitter'>
        <TwitterShareButton
          url={`http://localhost:3000/?productId=${productId}`}
          text='check out this fabulous piece I found on Noods!'
          media={styles.data ? styles.data[0].photos[0].url : null}
          children={<TwitterIcon size={32} round={true} />}
        />
      </div>
      <div className='social-media-pinterest'>
        <PinterestShareButton
          url={`localhost:3000/?productId=${productId}`}
          media={styles.data ? styles.data[0].photos[0].url : null}
          children={<PinterestIcon size={32} round={true} />}
        />
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
