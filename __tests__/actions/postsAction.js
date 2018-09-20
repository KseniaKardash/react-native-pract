import "react-native";
import * as types from "../../src/constants/actionTypes";
import {
  filterPostsAction,
  addPostAction,
  getPostsAction,
  deletePostAction,
  updatePostAction
} from "../../src/actions/postsActions";
import { posts, post } from "../../src/constants/posts";

describe("actions", () => {
  it("should create an action to delete a post", () => {
    const id = 34;
    const expectedAction = {
      type: types.DELETE_POST,
      id
    };
    expect(deletePostAction(id)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to add a new post", () => {
    const expectedAction = {
      type: types.ADD_POST,
      post
    };
    expect(addPostAction(post)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to get all posts", () => {
    const expectedAction = {
      type: types.GET_POSTS,
      posts
    };
    expect(getPostsAction(posts)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to filter posts", () => {
    const expectedAction = {
      type: types.SEARCH_USER_NAME,
      posts
    };
    expect(filterPostsAction(posts)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to update post", () => {
    const expectedAction = {
      type: types.UPDATE_POST,
      post
    };
    expect(updatePostAction(post)).toEqual(expectedAction);
  });
});
