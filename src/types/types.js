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
export type AddPostAction = {
  type: "ADD_POST",
  post: Post,
  id?: number,
  fetching?: boolean,
  error?: boolean
};
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
export type RequestPostsSuccess = {
  type: "GET_POSTS_SUCCESS",
  posts: Posts,
  id?: number
};
export type RequestPosts = {
  type: "GET_POSTS"
};
export type RequestPostsError = {
  type: "GET_POSTS_FAILURE",
  error?: boolean,
  loading?: boolean,
  id?: number
};

export type requestDayOfWeek = {
  type: "GET_DAY_OF_WEEK",
  posts: Posts,
  id?: string
};

export type RequestDayOfWeekSuccess = {
  type: "GET_DAY_OF_WEEK_SUCCESS",
  dayOfWeek: string
};
export type RequestDayOfWeekError = {
  type: "GET_DAY_OF_WEEK_FAILURE",
  error?: boolean,
  loading?: boolean,
  id?: number
};

export type ChangeCurrentUser = {
  type: "CHANGE_CURRENT_USER",
  user: User
};
export type FilterPostsAction = {
  type: "SEARCH_USER_NAME",
  query: string,
  id?: number,
  searchName?: string,
  posts?: Posts
};
export type SetDayOFWeekAction = {
  type: "SET_DAY_OF_WEEK",
  dayOfTheWeek: string
};

export type RequestSignIn = {
  type: "SIGN_IN_REQUEST",
  userId?: number,
  user?: User
};
export type RequestSignInSuccess = {
  type: "SIGN_IN_SUCCESS",
  user: User,
  userId?: number,
  user: User
};
export type RequestSignInError = {
  type: "SIGN_IN_FAILURE",
  error: boolean,
  userId?: number,
  user?: User
};
export type RequestSignOut = {
  type: "SIGN_OUT_REQUEST",
  userId?: number,
  user?: User
};

export type RequestSignOutSuccess = {
  type: "SIGN_OUT_SUCCESS",
  userId: number,
  user?: User
};
export type RequestSignOutError = {
  type: "SIGN_OUT_FAILURE",
  error: boolean,
  userId?: number,
  user?: User
};

export type User = {
  userInfo: {
    photo: string,
    email: string,
    givenName: string,
    familyName: string,
    name: string,
    id: number
  },
  firebase: {
    providerId: string,
    uid: string
  },
  credential: {
    idToken: Object,
    accessToken: string
  }
};
export type State = {
  postsFeed: {
    searchName: string,
    toggleSearchStatus: boolean,
    dayOfTheWeek: string
  },
  postsReducer: {
    posts: Posts,
    error: boolean,
    fetching: boolean
  },
  profile: {
    userName: string,
    userPhoto: string
  },
  authenticationReducer: {
    authorizedUsers: Array<User>,
    user: User,
    error: boolean,
    fetchingUser: boolean
  }
};

export type GetState = () => State;
