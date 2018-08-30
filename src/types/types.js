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
