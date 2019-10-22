import React from "react";
import { shallow, render, mount } from "enzyme";
import App from "../app.jsx";

describe("A suite", function() {
  it("should render without throwing an error", function() {
    expect(shallow(<App />).contains(<div id="hello">Hello</div>)).toBe(true);
  });

  it("should render to static HTML", function() {
    expect(render(<App />).text()).toEqual("Hello");
  });
});
