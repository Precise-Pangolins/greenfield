import React from 'react';
import uuid from 'uuidv4';

function StyleSelector({ currentStyleId, styles, onHandleStyleChange }) {
  return (
    <div style={{ display: 'flex' }}>
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
                  <span
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -2,
                      color: 'green'
                    }}>
                    ✔
                  </span>
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default StyleSelector;
