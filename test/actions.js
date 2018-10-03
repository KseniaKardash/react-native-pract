import "react-native";
import * as types from "../src/constants/actionTypes";
import {
  addPostAction,
  getPostsAction,
  deletePostAction,
  updatePostAction
} from "../src/actions/postsActions";
import { setUserName, setUserPhoto } from "../src/actions/profileActions";
import {
  setToggleSearchStatus,
  filterPostsAction
} from "../src/actions/postsFeedActions";
import { posts, post } from "../src/constants/posts";

describe("actions", () => {
  it("should create an action to delete a post", () => {
    const id = 34;
    const expectedAction = {
      type: types.DELETE_POST,
      id
    };
    expect(deletePostAction(id)).toEqual(expectedAction);
  });

  it("should create an action to add a new post", () => {
    const expectedAction = {
      type: types.ADD_POST,
      post
    };
    expect(addPostAction(post)).toEqual(expectedAction);
  });

  it("should create an action to get all posts", () => {
    const expectedAction = {
      type: types.GET_POSTS,
      posts
    };
    expect(getPostsAction(posts)).toEqual(expectedAction);
  });

  it("should create an action to filter posts", () => {
    const expectedAction = {
      type: types.SEARCH_USER_NAME,
      posts
    };
    expect(filterPostsAction(posts)).toEqual(expectedAction);
  });

  it("should create an action to update post", () => {
    const expectedAction = {
      type: types.UPDATE_POST,
      post
    };
    expect(updatePostAction(post)).toEqual(expectedAction);
  });

  it("should create an action to set a search value", () => {
    const value = false;
    const expectedAction = {
      type: types.SET_TOGGLE_SEARCH_BUTTON_STATUS,
      toggleSearchStatus: value
    };
    expect(setToggleSearchStatus(false)).toEqual(expectedAction);
  });

  it("should create an action to add a user name", () => {
    const userName = "Ksenia Kardash";
    const expectedAction = {
      type: types.SET_USERNAME,
      userName
    };
    expect(setUserName(userName)).toEqual(expectedAction);
  });

  it("should create an action to add a user photo", () => {
    const userPhoto =
      "https://i.pinimg.com/originals/dc/40/3c/dc403c09c8815be7b983b337f1936037.png";
    const expectedAction = {
      type: types.SET_USER_PHOTO,
      userPhoto
    };
    expect(setUserPhoto(userPhoto)).toEqual(expectedAction);
  });
});
