/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import firebase from "react-native-firebase";
import { GoogleSigninButton, GoogleSignin } from "react-native-google-signin";
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
        this.setState({
          isAuthenticated: true
        });
        console.tron(
          `Google Login with user : ${JSON.stringify(currentUser.toJSON())}`
        );
      })
      .catch(error => {
        console.tron(`Login fail with error: ${error}`);
      });
  };

  onLogOutGoogle = () => {
    GoogleSignin.signOut()
      .then(() => {
        firebase.auth().signOut();
      })
      .then(() => {
        this.setState({
          isAuthenticated: false
        });
        console.tron(`OUT`);
      })
      .catch(error => {
        console.tron(`Login fail with error: ${error}`);
      });
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

  render() {
    const { dayOfTheWeek } = this.props;
    const { isAuthenticated } = this.state;
    return (
      <View style={styles.container}>
        {isAuthenticated ? (
          <View>
            <ConfirmButton text="START" onPress={this.navigateToNextPage} />
            <ConfirmButton text="SIGN OUT" onPress={this.onLogOutGoogle} />
            <Text style={styles.dayOfTheWeek}>{dayOfTheWeek}</Text>
          </View>
        ) : (
          <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.onLoginGoogle}
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
  },
  googleButton: {
    width: 230,
    height: 50
  }
});

export default InitialScreen;
