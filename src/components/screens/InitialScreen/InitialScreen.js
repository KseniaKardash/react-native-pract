/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import ConfirmButton from "../../common/ConfirmButton";
import { BACKGROUND_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object
};

class InitialScreen extends PureComponent<Props> {
  _nextPage = () => {
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
        <ConfirmButton text="START" onPress={this._nextPage} />
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
