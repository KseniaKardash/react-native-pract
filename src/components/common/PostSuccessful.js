/* @flow */
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import ConfirmButton from "./ConfirmButton";
import { MAIN_COLOR } from "../../constants/colors";

type Props = {
  titlePost: string,
  textPost: string,
  onPress?: Function
};

class PostSuccesful extends PureComponent<Props> {
  render() {
    const { titlePost, textPost, onPress } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titlePost}>{titlePost}</Text>
        <Text style={styles.textPost}>{textPost}</Text>
        <ConfirmButton text="DONE" onPress={onPress} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titlePost: {
    color: MAIN_COLOR,
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 320,
    height: 320,
    padding: 30,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3
  },
  textPost: {
    fontSize: 20,
    paddingBottom: 10,
    textAlign: "center"
  }
});

export default PostSuccesful;
