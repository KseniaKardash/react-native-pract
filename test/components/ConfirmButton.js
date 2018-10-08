import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import ConfirmButton from "../../src/components/common/ConfirmButton";

describe("ConfirmButton snapShot", () => {
  it("renders as expected", () => {
    const snap = renderer.create(<ConfirmButton />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
