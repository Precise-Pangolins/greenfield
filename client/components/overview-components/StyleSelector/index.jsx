import React from 'react';

function StyleSelector({ styles = [], onHandleStyleChange }) {
  return (
    <div>
      {styles.map(style => {
        return (
          <img
            onClick={() => {
              onHandleStyleChange(style.style_id);
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              margin: '12px'
            }}
            src={style.photos[0].thumbnail_url}
          />
        );
      })}
    </div>
  );
}

export default StyleSelector;
