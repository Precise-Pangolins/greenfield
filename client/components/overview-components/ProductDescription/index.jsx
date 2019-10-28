import React from 'react';

function ProductDescription({ info = {} }) {
  return (
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '50px' }}>{info.name}</div>
      <div style={{ fontWeight: 'bold', fontSize: '30px' }}>{info.slogan}</div>
      <div>{info.description}</div>
    </div>
  );
}

export default ProductDescription;
