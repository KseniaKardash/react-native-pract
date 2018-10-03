/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
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
    const { dayOfTheWeek } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.dayOfTheWeek}>{dayOfTheWeek}</Text>
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
  },
  dayOfTheWeek: {
    color: MAIN_COLOR,
    fontSize: 22,
    marginBottom: 10
  }
});

export default InitialScreen;
