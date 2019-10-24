import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

function Features({ info, handleGetInfoRequest }) {
  useEffect(() => {
    handleGetInfoRequest(1);
  }, []);
  return (
    <div>
      List of Features like Buttons, cloth-type, etc:
      {info ? <div>{info.features[0].feature}</div> : null}
    </div>
  );
}

export default Features;
