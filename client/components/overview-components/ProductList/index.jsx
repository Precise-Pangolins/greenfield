import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

function ProductList({ list, handleGetListRequest }) {
  useEffect(() => {
    handleGetListRequest();
  }, []);
  return <div>{list.length > 0 ? <div>{list[0].description}</div> : null}</div>;
}

export default ProductList;
