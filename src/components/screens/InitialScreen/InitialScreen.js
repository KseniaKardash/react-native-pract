/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "react-native-firebase";
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from "react-native-google-signin";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR, MAIN_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  userName: string,
  userPhoto: string,
  dayOfTheWeek: string,
  setUserName: Function,
  setUserPhoto: Function,
  requestDayOfWeek: Function
};

class InitialScreen extends PureComponent<Props> {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    const {
      userName,
      setUserName,
      userPhoto,
      setUserPhoto,
      requestDayOfWeek
    } = this.props;
    if (userName == "") {
      setUserName("Ksenia Kardash");
    }
    if (userPhoto == "") {
      setUserPhoto(
        "https://i.pinimg.com/originals/61/d5/d3/61d5d36722b29bd95aaec4488f85884b.jpg"
      );
      requestDayOfWeek();
    }
    GoogleSignin.configure({ offlineAccess: false });
  }

  onLoginGoogle = () => {
    GoogleSignin.signIn()
      .then(data => {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken
        );
        return firebase.auth().signInWithCredential(credential);
      })
      .then(currentUser => {
        console.tron(
          `Google Login with user : ${JSON.stringify(currentUser.toJSON())}`
        );
      })
      .catch(error => {
        console.tron(`Login fail with error: ${error}`);
      });
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        isAuthenticated: true
      });
      console.tron(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.tron(`SIGN_IN_CANCELLED`);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.tron(`IN_PROGRESS`);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.tron(`PLAY_SERVICES_NOT_AVAILABLE`);
      } else {
        console.tron(`UNDETECTED_ERROR`);
      }
    }
  };
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

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({
        isAuthenticated: false
      });
    } catch (error) {
      console.tron(error);
    }
  };
  render() {
    const { dayOfTheWeek } = this.props;
    const { isAuthenticated } = this.state;
    return (
      <View style={styles.container}>
        {isAuthenticated ? (
          <View>
            <ConfirmButton text="START" onPress={this.navigateToNextPage} />
            <ConfirmButton text="SIGN OUT" onPress={this.signOut} />
            <Text style={styles.dayOfTheWeek}>{dayOfTheWeek}</Text>
          </View>
        ) : (
          <GoogleSigninButton
            style={{ width: 215, height: 55 }}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Auto}
            onPress={this.signIn}
          />
        )}
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
    fontSize: 22,
    marginBottom: 10
  }
});

export default InitialScreen;
