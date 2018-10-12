/* @flow */
import * as flowType from "../types/types";


const ADD_NEW_AUTHORIZED_USER = 'ADD_NEW_AUTHORIZED_USER';
const DELETE_AUTHORIZED_USER = 'DELETE_AUTHORIZED_USER';


type State = Array<flowType.User>;
export const authorizedUsersState = [];

export type AddNewAuthorizedUser = {
  type: "ADD_NEW_AUTHORIZED_USER",
  authorizedUser: flowType.User
};

export type DeleteAuthorizedUser = {
  type: "DELETE_AUTHORIZED_USER",
  userId: number
};

type Action =
  | AddNewAuthorizedUser
  | DeleteAuthorizedUser;

export default function authorizedUsers(
  state: State = authorizedUsersState,
  action: Action
): State {
  switch (action.type) {
    case ADD_NEW_AUTHORIZED_USER:
      return  [...state, action.authorizedUser];
    case DELETE_AUTHORIZED_USER: {
    const initialPosts = [...state];
    const posts = initialPosts.filter(user => user.userInfo.id !== action.userId);
    return posts;
}
    default:
      return state;
  }
}

export function addNewAuthorizedUser(user: flowType.User) {
  return {
    type: ADD_NEW_AUTHORIZED_USER,
    user: user
  };
}

export function deleteAuthorizedUser(userId: number) {
  return {
    type: DELETE_AUTHORIZED_USER,
    userId: userId
  };
}

//!!!!!!!!!!!! WHITELIST PERSIST authorizedUsers


import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import type { Uri } from "../../types/types";
import { MAIN_COLOR } from "../../constants/colors";

type Props = {
  uri: Uri,
  uriPhoto: Uri,
  userName: string,
  onShowSelectedPost?: Function,
  id?: number
};

const AuthorizedUser = (props: Props) => {
  const { uri, uriPhoto, children, userName, onShowSelectedPost, id } = props;

  const onUserPhotoPress = () => {
    changeCurrentUser(id)
  };

  return (
        <TouchableHighlight onPress={onUserPhotoPress}>
          <Image style={styles.userImg} source={uriPhoto} />
        </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  userImg: {
    height: 60,
    width: 60,
    margin: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: MAIN_COLOR
  }
});

export AuthorizedUser;
