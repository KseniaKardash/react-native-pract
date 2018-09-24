import React from "react";
import renderer from "react-test-renderer";
import InitialScreen from "../../src/components/screens/InitialScreen/InitialScreen";

describe("InitialScreen snapShot", () => {
  it("renders as expected", () => {
    const snap = renderer.create(<InitialScreen />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
