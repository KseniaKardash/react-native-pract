import React from "react";
import renderer from "react-test-renderer";
import PostsFeed from "../../src/components/screens/PostsFeed/PostsFeed";

describe("PostsFeed snapShot", () => {
  it("renders as expected", () => {
    const snap = renderer.create(<PostsFeed />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
