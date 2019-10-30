import React from 'react';
import uuid from 'uuidv4';
import StarRatings from '../../../../src/redux/containers/RatingContainers/StarRatingsContainer.js';
import Scrollspy from 'react-scrollspy';

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
                    <span className='check-mark'>✔</span>
                  </div>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default StyleSelector;
