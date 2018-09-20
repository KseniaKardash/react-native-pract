/* @flow */
export type Uri = {
  uri: string
};

export type Post = {
  id: number,
  userName: string,
  likes: number,
  description: string,
  tag: string,
  uriPhoto: string,
  uri: string
};

export type Posts = Array<Post>;

export type SetUserNameAction = { type: "SET_USERNAME", userName: string };
export type SetUserPhotoAction = { type: "SET_USER_PHOTO", userPhoto: string };
export type SearchToggleStatusAction = {
  type: "SET_TOGGLE_SEARCH_BUTTON_STATUS",
  toggleSearchStatus: boolean
};
export type AddPostAction = { type: "ADD_POST", post: Post, id?: string };
export type DeletePostAction = {
  type: "DELETE_POST",
  post?: Post,
  id?: string
};
export type UpdatePostAction = {
  type: "UPDATE_POST",
  post: Post,
  id?: number
};
export type GetPostsAction = { type: "GET_POSTS", posts: Posts, id?: string };
export type FilterPostsAction = {
  type: "SEARCH_USER_NAME",
  posts: Posts,
  id?: string
};
export type State = {
  postsFeed: {
    searchName: string,
    toggleSearchStatus: boolean
  },
  postsReducer: Posts,
  profile: {
    userName: string,
    userPhoto: string
  }
};

export type GetState = () => State;
