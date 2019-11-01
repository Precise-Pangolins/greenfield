import React from 'react';

import * as actionTests from '../../src/redux/actions/overviewActionCreators.js';
import Overview from '../components/overview-components/Overview.jsx';
import OverviewContainer from '../../src/redux/containers/OverviewContainers/mainOverviewContainer.js';

//action types
describe('get product styles', function() {
  it('should return an action type', () => {
    let styles = actionTests.fetchProductStylesSuccess();
    return expect(styles.type).toBe('overview/FETCH_PRODUCT_STYLES_SUCCESS');
  });
});

describe('get product styles', function() {
  it('should return an action type', () => {
    let info = actionTests.fetchProductInfoSuccess();
    return expect(info.type).toBe('overview/FETCH_PRODUCT_INFO_SUCCESS');
  });
});

describe('get product styles', function() {
  it('should return an action type', () => {
    let list = actionTests.fetchProductListSuccess();
    return expect(list.type).toBe('overview/FETCH_PRODUCT_LIST_SUCCESS');
  });
});

//render
