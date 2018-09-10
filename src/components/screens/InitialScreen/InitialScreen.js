/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object,
  userName: string,
  userPhoto: string,
  setUserName: Function,
  setUserPhoto: Function
};

class InitialScreen extends PureComponent<Props> {
  componentDidMount() {
    const { userName, setUserName, userPhoto, setUserPhoto } = this.props;
    if (userName == "") {
      setUserName("Ksenia Kardash");
    }
    if (userPhoto == "") {
      setUserPhoto(
        "https://facebook.github.io/react-native/docs/assets/favicon.png"
      );
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
    return (
      <View style={styles.container}>
        <ConfirmButton text="START" onPress={this.navigateToNextPage} />
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
  }
});

export default InitialScreen;
