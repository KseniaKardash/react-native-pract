/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { GoogleSigninButton, GoogleSignin } from "react-native-google-signin";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR, MAIN_COLOR } from "../../../constants/colors";

// $FlowFixMe
console.disableYellowBox = true;

type Props = {
  navigator: Object,
  user: Object,
  dayOfTheWeek: string,
  fetchingUser: boolean,
  requestDayOfWeek: Function,
  requestSignIn: Function,
  requestSignOut: Function
};

class InitialScreen extends PureComponent<Props> {
  componentDidMount() {
    const { requestDayOfWeek } = this.props;
    requestDayOfWeek();
    GoogleSignin.configure({ offlineAccess: false });
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
    const {
      dayOfTheWeek,
      requestSignIn,
      requestSignOut,
      user,
      fetchingUser
    } = this.props;
    if (fetchingUser) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={MAIN_COLOR} />
        </View>
      );
    } else
      return (
        <View style={styles.container}>
          {user ? (
            <View>
              <Text style={styles.dayOfTheWeek}>{dayOfTheWeek}</Text>
              <ConfirmButton text="START" onPress={this.navigateToNextPage} />
              <ConfirmButton text="SIGN OUT" onPress={requestSignOut} />
            </View>
          ) : (
            <GoogleSigninButton
              style={styles.googleButton}
              size={GoogleSigninButton.Size.Standard}
              color={GoogleSigninButton.Color.Dark}
              onPress={requestSignIn}
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
    fontSize: 20,
    marginBottom: 30,
    alignSelf: "center"
  },
  googleButton: {
    width: 230,
    height: 50
  }
});

export default InitialScreen;
