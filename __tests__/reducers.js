import "react-native";
import * as types from "../src/constants/actionTypes";
import postsReducer from "../src/reducers/screenReducers/posts";
import postsFeed from "../src/reducers/screenReducers/postsFeed";
import profile from "../src/reducers/screenReducers/profile";

describe("postsFeed reducer", () => {
  const initialState = {
    searchName: "",
    toggleSearchStatus: false,
    dayOfTheWeek: ""
  };

  it("should return the initial state", () => {
    expect(postsFeed(undefined, {})).toEqual(initialState);
  });

  it("'should handle SEARCH_USER_NAME", () => {
    const state = postsFeed(initialState, {
      type: types.SEARCH_USER_NAME,
      searchName: "KS"
    });
    expect(state).toEqual({
      searchName: "KS",
      toggleSearchStatus: false,
      dayOfTheWeek: ""
    });
  });

  it("'should handle SEARCH_USER_NAME", () => {
    const state = postsFeed(initialState, {
      type: types.SET_DAY_OF_WEEK,
      dayOfTheWeek: "Wednesday"
    });
    expect(state).toEqual({
      searchName: "",
      toggleSearchStatus: false,
      dayOfTheWeek: "Wednesday"
    });
  });

  it("'should handle SET_TOGGLE_SEARCH_BUTTON_STATUS", () => {
    const state = postsFeed(initialState, {
      type: types.SET_TOGGLE_SEARCH_BUTTON_STATUS,
      toggleSearchStatus: true
    });
    expect(state).toEqual({
      searchName: "",
      toggleSearchStatus: true,
      dayOfTheWeek: ""
    });
  });
});

describe("profile reducer", () => {
  const initialState = {
    userName: "",
    userPhoto: ""
  };

  it("should return the initial state", () => {
    expect(profile(undefined, {})).toEqual(initialState);
  });

  it("'should handle SET_USERNAME", () => {
    const state = profile(initialState, {
      type: types.SET_USERNAME,
      userName: "KS"
    });
    expect(state).toEqual({
      userName: "KS",
      userPhoto: ""
    });
  });

  it("'should handle SET_USER_PHOTO", () => {
    const state = profile(initialState, {
      type: types.SET_USER_PHOTO,
      userPhoto: "URL"
    });
    expect(state).toEqual({
      userName: "",
      userPhoto: "URL"
    });
  });
});

describe("postsReducer CRUD", () => {
  const initialState = [];
  const post = {
    id: 0,
    userName: "Williamson Conrad",
    likes: 644,
    description: "",
    tag: "",
    uriPhoto: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    uri:
      "https://i.pinimg.com/originals/8f/cb/48/8fcb48206107eb4cf08f4fe46b5bb464.jpg"
  };
  const updatedPost = {
    id: 0,
    userName: "Williamson Conrad",
    likes: 644,
    description: "new",
    tag: "tag tag tag",
    uriPhoto: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    uri:
      "https://i.pinimg.com/originals/8f/cb/48/8fcb48206107eb4cf08f4fe46b5bb464.jpg"
  };
  const fakePost = {
    id: 4,
    userName: "Willifgon Cogdfg",
    likes: 64,
    description: "",
    tag: "tag tag",
    uriPhoto: "https://facebook.github.io/react-native/docs/assets/favicon.png",
    uri:
      "https://i.pinimg.com/originals/8f/cb/48/8fcb48206107eb4cf08f4fe46b5bb464.jpg"
  };
  it("should return the initial state", () => {
    expect(postsReducer(undefined, {})).toEqual(initialState);
  });

  it("'should handle ADD_POST", () => {
    const state = postsReducer(initialState, {
      type: types.ADD_POST,
      post: post
    });
    expect(state).toEqual([post]);
  });

  it("'should handle GET_POSTS", () => {
    const state = postsReducer(initialState, {
      type: types.GET_POSTS,
      posts: [post]
    });
    expect(state).toEqual([post]);
  });

  it("'should handle SEARCH_USER_NAME", () => {
    const state = postsReducer(initialState, {
      type: types.SEARCH_USER_NAME,
      posts: [post]
    });
    expect(state).toEqual([post]);
  });

  it("'should handle DELETE_POST", () => {
    const state = postsReducer([post], {
      type: types.DELETE_POST,
      id: 0
    });
    expect(state).toEqual(initialState);
  });

  it("'should handle UPDATE_POST with existPost", () => {
    const state = postsReducer([post], {
      type: types.UPDATE_POST,
      post: updatedPost
    });
    expect(state).toEqual([updatedPost]);
  });

  it("'should handle UPDATE_POST with fakePost", () => {
    const state = postsReducer([post], {
      type: types.UPDATE_POST,
      post: fakePost
    });
    expect(state).toEqual([post]);
  });
});
