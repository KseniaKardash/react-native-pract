/* @flow */
import React, { PureComponent } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Animated,
  Easing
} from "react-native";
import { GoogleSignin } from "react-native-google-signin";
import type { Uri, User } from "../../types/types";
import { HIGLIGHT_COLOR } from "../../constants/colors";

type Props = {
  userPhoto: Uri,
  changeCurrentUser: Function,
  deleteAuthorizedUser: Function,
  requestSignOut: Function,
  currentUser: User,
  user: User
};

class AuthorizedUser extends PureComponent<Props> {
  scaleValue = new Animated.Value(0);

  buttonScale = this.scaleValue.interpolate({
    inputRange: [0, 0.4, 0.8],
    outputRange: [1, 0.96, 0.98]
  });

  onCurrentUserChange = () => {
    const { user, changeCurrentUser } = this.props;
    this.scale();
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

  scale = () => {
    this.scaleValue.setValue(0);
    Animated.timing(this.scaleValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.easeOutBack,
      useNativeDriver: true
    }).start();
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
    const { userPhoto, user, currentUser } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={this.onCurrentUserChange}
        onLongPress={this.deleteUser}
      >
        <Animated.View
          style={[
            {
              transform: [{ scale: this.buttonScale }],
              borderWidth: user.userInfo.id === currentUser.userInfo.id ? 2 : 0
            },
            styles.touchableContainer
          ]}
        >
          <Image
            style={styles.userImg}
            source={
              userPhoto.uri ? userPhoto : require("../../assets/img/user.png")
            }
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  userImg: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  touchableContainer: {
    margin: 20,
    borderRadius: 65,
    borderColor: HIGLIGHT_COLOR
  }
});

export default AuthorizedUser;
