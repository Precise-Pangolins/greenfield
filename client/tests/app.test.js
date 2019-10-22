import React from 'react';
import { shallow, render, mount } from 'enzyme';
import App from '../app.jsx';
import ProductInfo from '../components/overview-components/ProductInfo/index.jsx';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(
      shallow(<ProductInfo />).contains(
        <div>Genuine Fur Coat: Limited Edition </div>
      )
    ).toBe(true);
  });

  it('should render to static HTML', function() {
    expect(render(<ProductInfo />).text()).toEqual(
      'Genuine Fur Coat: Limited Edition '
    );
  });
});
