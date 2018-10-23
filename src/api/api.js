/* @flow */
import axios from "axios";
import firebase from "react-native-firebase";
import { GoogleSignin } from "react-native-google-signin";
import { WORLD_CLOCK_API } from "../constants/URI";
import type { Post } from "../types/types";

export const signInWithGoogle = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) await GoogleSignin.signOut();
  const data = await GoogleSignin.signIn();
  const credential = await firebase.auth.GoogleAuthProvider.credential(
    data.idToken,
    data.accessToken
  );
  const fb = await firebase.auth().signInWithCredential(credential);
  return {
    userInfo: data.user,
    firebase: { providerId: fb.providerId, uid: fb.uid },
    credential: { idToken: data.idToken, accessToken: data.accessToken }
  };
};

export const signOutWithGoogle = async () => {
  await GoogleSignin.signOut();
  await firebase.auth().signOut();
};

export const fetchPosts = async (id: number) => {
  const posts = await firebase
    .database()
    .ref(`users/${id}/posts`)
    .once("value")
    .then(snapshot => snapshot.val());
  return Object.values(posts);
};

export function deletePostFromServer(userId: number, postId: number) {
  firebase
    .database()
    .ref(`users/${userId}/posts/${postId}`)
    .remove();
}

export function addNewPostToServer(id: number, post: Post) {
  firebase
    .database()
    .ref(`users/${id}/posts/${post.id}`)
    .set(post);
}

export function updatePostOnServer(id: number, post: Post) {
  firebase
    .database()
    .ref(`users/${id}/posts/${post.id}`)
    .set(post);
}

export const filterPostsByUserName = async (id: number, query: string) => {
  let posts = [];
  await firebase
    .database()
    .ref(`users/${id}/posts/`)
    .orderByChild("userName")
    .startAt(query)
    .on("child_added", function(data) {
      posts.push(data.val());
    });
  return posts;
};

export function fetchDayOfTheWeek() {
  return axios.get(`${WORLD_CLOCK_API}/api/json/est/now`);
}
