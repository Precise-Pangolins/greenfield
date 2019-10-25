import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '@babel/polyfill';

function Features({ info, handleGetInfoRequest }) {
  useEffect(() => {
    handleGetInfoRequest(1);
  }, []);
  return (
    <div>
      {info.features ? (
        <div>
          {info.features.map(feature => {
            return <div>{feature.feature}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Features;
