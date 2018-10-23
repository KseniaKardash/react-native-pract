/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { GoogleSigninButton, GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";
import ConfirmButton from "../../common/ConfirmButton";
import AuthorizedUser from "../../../containers/AuthorizedUserContainer";
import { BACKGROUND_COLOR, MAIN_COLOR } from "../../../constants/colors";
import type { User } from "../../../types/types";

// $FlowFixMe
console.disableYellowBox = true;

type Props = {
  navigator: Object,
  authorizedUsers: Array<User>,
  fetchingUser: boolean,
  requestSignIn: Function
};

class InitialScreen extends PureComponent<Props> {
  componentDidMount() {
    GoogleSignin.configure({ offlineAccess: false });
    const config = {
      apiKey: "AIzaSyARKSbP6BFfP2RQXkPa4zWzv400w7znYPw",
      authDomain: "react-native-1b2a0.firebaseapp.com",
      databaseURL: `https://react-native-1b2a0.firebaseio.com/`,
      projectId: "react-native-1b2a0",
      storageBucket: "react-native-1b2a0.appspot.com",
      messagingSenderId: "715039456545"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  navigateToNextPage = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: "PostsFeed",
      title: "PostsFeed",
      backButtonHidden: true,
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    const { requestSignIn, authorizedUsers, fetchingUser } = this.props;
    if (fetchingUser) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={MAIN_COLOR} />
        </View>
      );
    } else
      return (
        <View style={styles.container}>
          <View style={styles.users}>
            {authorizedUsers.map(user => {
              return (
                <AuthorizedUser
                  userPhoto={{ uri: user.userInfo.photo }}
                  user={user}
                  key={user.userInfo.id}
                />
              );
            })}
          </View>
          <View>
            {authorizedUsers.length !== 0 ? (
              <ConfirmButton text="START" onPress={this.navigateToNextPage} />
            ) : (
              <View />
            )}
          </View>
          <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={requestSignIn}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center"
  },
  dayOfTheWeek: {
    color: MAIN_COLOR,
    fontSize: 20,
    marginBottom: 30,
    alignSelf: "center"
  },
  googleButton: {
    width: 206,
    height: 52,
    marginTop: 20
  },
  users: {
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 80
  }
});

export default InitialScreen;
