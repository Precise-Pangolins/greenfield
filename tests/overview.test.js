import React from "react";

import getInfoReducer from "../src/redux/reducers/overview-reducers/infoReducer.js";
import getListReducer from "../src/redux/reducers/overview-reducers/listReducer.js";
import getStylesReducer from "../src/redux/reducers/overview-reducers/stylesReducer.js";
import * as actionTests from "../src/redux/actions/overviewActionCreators.js";
import { emptyProduct } from "../src/redux/reducers/overview-reducers/initialState.js";

//action types
describe("get product styles", function() {
  it("should return an action type", () => {
    let styles = actionTests.fetchProductStylesSuccess();
    return expect(styles.type).toBe("overview/FETCH_PRODUCT_STYLES_SUCCESS");
  });
});

describe("get product info", function() {
  it("should return an action type", () => {
    let info = actionTests.fetchProductInfoSuccess();
    return expect(info.type).toBe("overview/FETCH_PRODUCT_INFO_SUCCESS");
  });
});

describe("get product list", function() {
  it("should return an action type", () => {
    let list = actionTests.fetchProductListSuccess();
    return expect(list.type).toBe("overview/FETCH_PRODUCT_LIST_SUCCESS");
  });
});

//reducers
describe("get info reducer", function() {
  it(`should return an integer representing an id`, () => {
    let info = getInfoReducer(emptyProduct, {
      type: "FETCH_PRODUCT_INFO_SUCCESS",
      payload: emptyProduct
    });
    console.log({ info });
    return expect(info.id).toBe(0);
  });
});

describe("get list reducer", function() {
  it(`should return an array`, () => {
    let list = getListReducer([], {
      type: "FETCH_PRODUCT_LIST_SUCCESS",
      payload: []
    });
    return expect(Array.isArray(list)).toBe(true);
  });
});

describe("get styles reducer", function() {
  it(`should return an integer representing an id`, () => {
    let styles = getStylesReducer(
      {},
      {
        type: "FETCH_PRODUCT_STYLESs_SUCCESS",
        payload: {}
      }
    );
    return expect(typeof styles).toBe("object");
  });
});
