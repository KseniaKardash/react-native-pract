/* @flow */
import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import HeaderTitle from "../../common/HeaderTitle";
import PostSuccessful from "../../common/PostSuccessful";
import { SHADOW_COLOR } from "../../../constants/colors";

type Props = {
  navigator: Object
};

class InfoModal extends PureComponent<Props> {
  navigateToRootPage = () => {
    const { navigator } = this.props;
    navigator.popToRoot({
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderTitle style={styles.headerTitle} text="POST SUCCESSFUL" />
        <PostSuccessful
          style={styles.headerTitle}
          titlePost="TITLE"
          textPost="The photo has successfully been posted!"
          onPress={this.navigateToRootPage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: SHADOW_COLOR,
    flex: 1,
    alignItems: "center",
    paddingTop: 40
  }
});

export default InfoModal;
