import React from "react";
import { shallow, configure } from "enzyme";
import App from "../App";
import Header from "../components/Header";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("render without crashing", function () {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<App />);
  });

  it("render without crashing", function () {
    const mountedHeader = shallow(<App />);
    expect(mountedHeader.length).toBeGreaterThan(0);
  });
});
