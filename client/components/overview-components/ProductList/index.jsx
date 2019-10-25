import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

function ProductList({ list, handleGetListRequest }) {
  useEffect(() => {
    handleGetListRequest();
  }, []);
  return (
    <div>
      {list.length > 0 ? (
        <>
          <div style={{ fontWeight: 'bold', fontSize: '50px' }}>
            {list[0].name}
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '30px' }}>
            {list[0].slogan}
          </div>
          <div>{list[0].description}</div>
        </>
      ) : null}
    </div>
  );
}

export default ProductList;
