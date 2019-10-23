import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Overview from '../components/overview-components/Overview.jsx';
import getProdStyles from '../../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getStyles.js';
import getProdInfo from '../../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getInfo.js';
import getProdList from '../../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getList.js';

describe('Get Overview Actions and Creators', function() {
  it('Should retrieve a list of products', async () => {
    let resultList = await getProdList();
    let prodList = await resultList(items => {
      return expect(items.type).toBe('FETCH_LIST');
    });
  });

  it('Should retrieve a list of product styles', async () => {
    let resultStyle = await getProdStyles(1);
    let prodStylesList = await resultStyle(items => {
      return expect(items.type).toBe('FETCH_STYLES');
    });
  });

  it('Should retrieve a list of products', async () => {
    let resultInfo = await getProdInfo(1);
    let prodInfo = await resultInfo(items => {
      return expect(items.type).toBe('FETCH_INFO');
    });
  });
});
