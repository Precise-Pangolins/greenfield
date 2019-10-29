import React from 'react';
import uuid from 'uuidv4';

function StyleSelector({
  currentStyle,
  currentStyleId,
  styles,
  onHandleStyleChange,
  info = {}
}) {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
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
                    <span
                      style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '-2px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50px',
                        boxShadow: '#1a1a1a 0px 0px 3px'
                      }}>
                      ✔
                    </span>
                    {/* <div>{currentStyle ? currentStyle.name : null}</div> */}
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
