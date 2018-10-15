/* @flow */
import React, { PureComponent } from "react";
import { Image, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { GoogleSignin } from "react-native-google-signin";
import type { Uri, User } from "../../types/types";

type Props = {
  userPhoto: Uri,
  changeCurrentUser: Function,
  deleteAuthorizedUser: Function,
  requestSignOut: Function,
  user: User
};

class AuthorizedUser extends PureComponent<Props> {
  onCurrentUserChange = () => {
    const { user, changeCurrentUser } = this.props;
    changeCurrentUser(user);
  };

  getCurrentUserInfo = async (userId: number) => {
    const { requestSignOut, deleteAuthorizedUser } = this.props;
    try {
      const data = await GoogleSignin.signInSilently();
      if (data.user.id === userId) requestSignOut();
      else deleteAuthorizedUser(userId);
    } catch (error) {
      deleteAuthorizedUser(userId);
    }
  };

  deleteUser = () => {
    const { user } = this.props;
    Alert.alert(
      "Do you want to delete this user?",
      `User: ${user.userInfo.name} `,
      [
        {
          text: "Yes",
          onPress: () => {
            this.getCurrentUserInfo(user.userInfo.id);
          }
        },
        {
          text: "No"
        }
      ]
    );
  };

  render() {
    const { userPhoto } = this.props;
    return (
      <TouchableHighlight
        onPress={this.onCurrentUserChange}
        onLongPress={this.deleteUser}
        style={styles.touchableImg}
      >
        <Image style={styles.userImg} source={userPhoto} />
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  userImg: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  touchableImg: {
    margin: 20,
    borderRadius: 60
  }
});

export default AuthorizedUser;
