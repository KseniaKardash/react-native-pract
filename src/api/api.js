/* @flow */
import axios from "axios";
import { SERVER_URL, WORLD_CLOCK_API } from "../constants/URI";
import type { Post } from "../types/types";

export function fetchPosts() {
  return axios.get(`${SERVER_URL}/posts/`);
}

export function deletePostFromServer(id: number) {
  return axios.delete(`${SERVER_URL}/posts/${id}`);
}

export function addNewPostToServer(post: Post) {
  return axios.post(`${SERVER_URL}/posts/`, post);
}

export function updatePostOnServer(post: Post) {
  return axios.post(`${SERVER_URL}/posts/${post.id}`, post);
}

export function filterPostsByUserName(query: string) {
  return axios.get(`${SERVER_URL}/posts/?q=${query}`);
}

export function fetchDayOfTheWeek() {
  return axios.get(`${WORLD_CLOCK_API}/api/json/est/now`);
}
