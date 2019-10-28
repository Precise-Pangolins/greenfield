import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Overview from '../components/overview-components/Overview.jsx';
import {getProdStyles, getProdInfo
getProdList} from '../../src/redux/actionCreators/overviewActions.js';


describe('Get Overview Actions and Creators', function() {
  it('Should retrieve a list of products', async () => {
    let resultList = await getProdList();
    let prodList = await resultList(items => {
      return expect(items.type).toBe('FETCH_PRODUCT_LIST');
    });
  });

  it('Should retrieve a list of product styles', async () => {
    let resultStyle = await getProdStyles(1);
    let prodStylesList = await resultStyle(items => {
      return expect(items.type).toBe('FETCH_PRODUCT_STYLES');
    });
  });

  it('Should retrieve a list of products', async () => {
    let resultInfo = await getProdInfo(1);
    let prodInfo = await resultInfo(items => {
      return expect(items.type).toBe('FETCH_PRODUCT_INFO');
    });
  });
});
